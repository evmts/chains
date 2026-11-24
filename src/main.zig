const std = @import("std");
const chains = @import("chains");

pub fn main() !void {
    std.debug.print("Chain Constants Library\n", .{});
    std.debug.print("Total chains loaded: {d}\n", .{chains.all_chains.len});

    // Example: lookup chain by ID
    if (chains.getChainById(14)) |chain| {
        std.debug.print("\nExample - Chain ID 14:\n", .{});
        std.debug.print("  Name: {s}\n", .{chain.name});
        std.debug.print("  Symbol: {s}\n", .{chain.native_currency.symbol});
        std.debug.print("  RPC endpoints: {d}\n", .{chain.rpc.len});
    }
}
