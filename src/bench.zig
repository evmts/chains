const std = @import("std");
const chains = @import("chains");

const Lookup = enum { hit, miss };

fn benchmark(comptime kind: Lookup) !void {
    const count = chains.all_chains.len * 400;
    var found: usize = 0;
    var timer = try std.time.Timer.start();
    for (0..count) |index| {
        const id = switch (kind) {
            .hit => chains.all_chains[index % chains.all_chains.len].chain_id,
            .miss => std.math.maxInt(u64) - @as(u64, @intCast(index)),
        };
        const exists = chains.getChainById(id) != null;
        std.mem.doNotOptimizeAway(exists);
        found += @intFromBool(exists);
    }
    const elapsed = timer.read();
    const expected = if (kind == .hit) count else 0;
    if (found != expected) return error.UnexpectedLookupResult;
    const ns = @as(f64, @floatFromInt(elapsed)) / @as(f64, @floatFromInt(count));
    std.debug.print("{s}: {d:.1} ns/op ({d} lookups)\n", .{ @tagName(kind), ns, count });
}

pub fn main() !void {
    try benchmark(.hit);
    try benchmark(.miss);
}
