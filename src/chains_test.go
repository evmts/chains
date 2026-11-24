package chains_test

import (
	"math"
	"testing"

	"github.com/evmts/chains/src"
)

func TestFlareLookup(t *testing.T) {
	flare := chains.GetChainByID(chains.ChainIDFLR14)
	if flare == nil || flare.Name != "Flare Mainnet" || flare.NativeCurrency.Symbol != "FLR" {
		t.Fatalf("unexpected Flare entry: %#v", flare)
	}
	if chains.GetChainByID(0) != nil || chains.GetChainByID(math.MaxUint64) != nil {
		t.Fatal("found a chain for an unregistered ID")
	}
}

func TestRegistryRoundTrip(t *testing.T) {
	if len(chains.ChainByID) != len(chains.AllChains) {
		t.Fatal("chain map and registry sizes differ")
	}
	for i, chain := range chains.AllChains {
		if i > 0 && chains.AllChains[i-1].ChainID >= chain.ChainID {
			t.Fatalf("registry is not strictly ordered at chain %d", chain.ChainID)
		}
		if chains.ChainByID[chain.ChainID] != &chains.AllChains[i] || chains.GetChainByID(chain.ChainID) != &chains.AllChains[i] {
			t.Fatalf("lookup result differs from registry entry for chain %d", chain.ChainID)
		}
	}
}

func FuzzGetChainByID(f *testing.F) {
	for _, chain := range chains.AllChains {
		f.Add(chain.ChainID)
	}
	f.Add(uint64(0))
	f.Add(uint64(math.MaxUint64))
	f.Fuzz(func(t *testing.T, id uint64) {
		if got, want := chains.GetChainByID(id), chains.ChainByID[id]; got != want {
			t.Fatalf("lookup(%d) = %p, want %p", id, got, want)
		}
	})
}

var lookupResult *chains.Chain

func BenchmarkLookup(b *testing.B) {
	b.Run("Hit", func(b *testing.B) {
		b.ReportAllocs()
		for i := 0; i < b.N; i++ {
			lookupResult = chains.GetChainByID(chains.AllChains[i%len(chains.AllChains)].ChainID)
		}
		if lookupResult == nil {
			b.Fatal("hit benchmark returned no chain")
		}
	})
	b.Run("Miss", func(b *testing.B) {
		b.ReportAllocs()
		for i := 0; i < b.N; i++ {
			lookupResult = chains.GetChainByID(math.MaxUint64 - uint64(i))
		}
		if lookupResult != nil {
			b.Fatal("miss benchmark returned a chain")
		}
	})
}
