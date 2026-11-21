# Dunya — Session Safeguards Release Requirements
Status: **production-branch requirements**. The UI implementation is in draft PR #62, not a verified public release.

## Player promise
Dunya is designed to help people learn and take constructive action away from the screen. Never optimize for compulsive play or use worship, shahada, dawah, wudu or volunteering as a tracked engagement metric.

## Required in-game controls
- Before or during play, choose a voluntary 10, 20, 30 or 45 minute reminder, or turn reminders off.
- Count foreground play time only. No streaks, loot boxes, fear-of-missing-out prompts, autoplay feeds, guilt or punishment for leaving.
- At the reminder, pause safely and offer equal, accessible choices: **Save and leave**, **Take a break**, **Continue for now**.
- **I'm going to pray / take a real-life break** must immediately pause and offer a local save; never record prayer completion, intention, location or religious status.
- If saving fails, tell the player and do not claim progress was saved.
- Provide keyboard/touch/controller access, screen-reader labels, reduced-motion support and focus handling.
- No forced religious instruction, no ads in religious learning, no invented local opportunities.
- An optional real-world activity card must be informational, private and noncompetitive.

## Engineering acceptance
1. 10/20/30/45/off choices persist locally; corrupt settings safely default to 20.
2. Hidden tabs do not accumulate play time; pause dialog prevents movement and interaction.
3. Reminders do not immediately retrigger after Continue.
4. Save-and-leave only reports success if storage succeeds.
5. Prayer break never emits analytics, rewards or religious-completion events.
6. Closing and returning preserves the ordinary game save and does not fabricate religious observance.
7. Keyboard-only, touch and screen-reader flows are browser-tested.
8. Clean frozen install, typecheck, unit tests, build, and mobile screenshot QA are required before merge.

## Source of truth and dependencies
- [Real World First policy (draft PR #67)](https://github.com/ummahbuild/gtahalal/blob/feat/real-world-action-lms-consumer-protection/docs/REAL_WORLD_FIRST_GAMEPLAY_POLICY.md)
- [Session UI implementation (draft PR #62)](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/apps/game/src/SessionSafeguards.tsx)
- [Gameplay issue #61](https://github.com/ummahbuild/gtahalal/issues/61), [foundation issue #26](https://github.com/ummahbuild/gtahalal/issues/26), [prayer break issue #56](https://github.com/ummahbuild/gtahalal/issues/56).
- [WHO gaming disorder FAQ](https://www.who.int/standards/classifications/frequently-asked-questions/gaming-disorder) provides background; this feature is not a clinical intervention.

## Release gate
No PR may be merged based on these requirements alone. The gameplay build is still missing a committed pnpm lockfile and clean verified checks. No live calling, real wudu verification, or LMS launch is implied.
