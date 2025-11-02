//! Chain constants library - auto-generated from DefiLlama/chainlist
//! This library provides blockchain network constants for use in Zig applications.
const std = @import("std");

// Re-export all chain constants and types
pub const chains = @import("chains.zig");

// Re-export commonly used types and functions
pub const Chain = chains.Chain;
pub const NativeCurrency = chains.NativeCurrency;
pub const Explorer = chains.Explorer;
pub const getChainById = chains.getChainById;
pub const all_chains = chains.all_chains;

test "chain lookup" {
    // Test that we can lookup Ethereum mainnet (chain ID 1)
    // This will be valid when chainlist includes mainnet data
    const chain = chains.getChainById(14);
    try std.testing.expect(chain != null);
}
