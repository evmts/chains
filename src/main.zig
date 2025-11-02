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

test "simple test" {
    const gpa = std.testing.allocator;
    var list: std.ArrayList(i32) = .empty;
    defer list.deinit(gpa); // Try commenting this out and see if zig detects the memory leak!
    try list.append(gpa, 42);
    try std.testing.expectEqual(@as(i32, 42), list.pop());
}

test "fuzz example" {
    const Context = struct {
        fn testOne(context: @This(), input: []const u8) anyerror!void {
            _ = context;
            // Try passing `--fuzz` to `zig build test` and see if it manages to fail this test case!
            try std.testing.expect(!std.mem.eql(u8, "canyoufindme", input));
        }
    };
    try std.testing.fuzz(Context{}, Context.testOne, .{});
}
