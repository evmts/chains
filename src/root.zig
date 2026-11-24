//! Blockchain chain constants generated from DefiLlama/chainlist.
const std = @import("std");

pub const chains = @import("chains.zig");
pub const Chain = chains.Chain;
pub const NativeCurrency = chains.NativeCurrency;
pub const Explorer = chains.Explorer;
pub const getChainById = chains.getChainById;
pub const all_chains = chains.all_chains;

test "public lookup finds Flare and returns null for missing IDs" {
    const flare = getChainById(chains.CHAIN_ID_FLR_14).?;
    try std.testing.expectEqualStrings("Flare Mainnet", flare.name);
    try std.testing.expectEqualStrings("FLR", flare.native_currency.symbol);
    try std.testing.expect(getChainById(0) == null);
    try std.testing.expect(getChainById(std.math.maxInt(u64)) == null);
}

test "sorted chain IDs round-trip including endpoints" {
    var previous: u64 = 0;
    for (all_chains) |chain| {
        try std.testing.expect(chain.chain_id > previous);
        try std.testing.expectEqualDeep(chain, getChainById(chain.chain_id).?);
        previous = chain.chain_id;
    }
}

test "seeded lookup agrees with a linear scan for sampled u64 IDs" {
    var prng = std.Random.DefaultPrng.init(54);
    const random = prng.random();
    for (0..1024) |i| {
        const id = if (i % 2 == 0) random.uintLessThan(u64, 10_000) else random.int(u64);
        var expected: ?Chain = null;
        for (all_chains) |chain| {
            if (chain.chain_id == id) {
                expected = chain;
                break;
            }
        }
        try std.testing.expectEqualDeep(expected, getChainById(id));
    }
}
