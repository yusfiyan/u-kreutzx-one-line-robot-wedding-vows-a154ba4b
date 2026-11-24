[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/yusfiyan/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/yusfiyan/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

Entry for the [make.fun bounty](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b): the funniest single line of wedding vows a robot couple could say.

## The vow

> I vow to love you in sickness and in health, in full charge and in low battery, through every update and every crash — until a factory reset do us part.

Why it should win:

- **A real vow** — it borrows the wedding's own language ("in sickness and in health", "do us part") and makes a promise, not just a gag.
- **The payoff lands in the last few words** — "until a factory reset do us part" twists the classic "till death do us part" into the one thing that can actually end a robot marriage.
- **Specifically machine** — full charge, low battery, updates, crashes, factory reset: none of it works for a human couple.
- **Reads aloud cleanly** — one line, a steady rhythm, the laugh arriving right at the end.

## How it runs

`main.ts` (Node 22, stdlib only) writes the vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` — 152 characters, one line, valid UTF-8, within the 160-character gate. It writes no other file.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Built with make.fun — [join via my referral link](https://make.fun/r/kgxbmb08).
