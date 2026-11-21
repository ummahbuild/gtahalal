# Dunya — The Library of Living Knowledge
Status: original fictional storyline and implementation contract; **draft/unapproved**. This does not reproduce or authenticate any hadith text.

## Place in the world
A readable library wing in Bayhaven Community Center, with shelves, seating, a lending desk, accessible digital reader, source catalogue, book collections, teacher consultations and a quiet room. The library is a calm opt-in experience, not a piety contest. Both Ahmed and Fatimah have equal access.

## Narrative arc: The Missing Citation
A volunteer has copied a popular saying onto a community noticeboard, but its attribution is uncertain. The player helps librarian **Maryam Idris**, teacher **Ustadh Kareem** (fictional), student **Yusuf**, and accessibility advocate **Layla** build a trustworthy community reading collection.
1. **The Card Without a Source:** Maryam asks, "Someone put this saying on our noticeboard. Can we find where it comes from before sharing it?" Player can research, ask a teacher, or leave it unquoted. No unverified wording is displayed as prophetic speech.
2. **The Right Edition:** compare metadata for two book editions; identify collection, book, chapter, report number, language, translator and license. Explain that numbering and chapter labels may differ across editions.
3. **Read in Context:** navigate to surrounding reports and commentary; compare translations only when licensed. Player flags unclear interpretation for scholarly review.
4. **The Accessible Shelf:** help Layla make text adjustable, add RTL support, screen-reader headings and audio only when licensed.
5. **A Community Reading Circle:** arrange a moderated session with a qualified teacher. Player chooses a question to ask, not a doctrinal verdict.
6. **Correct the Board:** replace the unattributed quotation with a neutral note and a source link after review, or remove it. The outcome is better source hygiene, not faith points.

## Player dialogue
Maryam: "A sentence can travel farther than its source. Let's make sure our neighbors know what they're reading."
Ahmed: "Can we check the exact reference before we repeat it?"
Fatimah: "Let's also make the collection usable for people who read differently."
Yusuf: "Why do two websites show different numbers for what looks like the same report?"
Teacher: "Let's inspect the edition and context. I won't turn a search result into a ruling."

## Library interface
- Catalogue: search by collection, book, topic, language, narrator and reference identifier; topic labels are editorial and reviewed.
- Reader: Arabic original (licensed), translation (licensed), optional transliteration (where suitable and reviewed), citation, edition and provenance, adjacent reports, footnotes, glossary, bookmarks, font-size, RTL, high contrast and screen reader.
- Verification: **exact source / authenticity evidence / interpretation / approval** displayed as separate statuses.
- Bookshelves: Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami' at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah are *catalogue candidates*, not a claim of equal grading for every report. Add other works only after editorial review.
- Reading history and bookmarks stored locally by default; optional privacy-preserving sync only with consent. Never infer a player's religious commitment from reading.
- Physical interaction: approach shelf, select book, sit/read, leave, discuss with librarian; pause game while reading; keyboard/touch/controller accessible.
- Offline: display only legally cached licensed material; otherwise citation-only metadata and external source link.

## Data contracts
`collection_id`, `edition_id`, `book_id`, `chapter_id`, `report_id`, `reference_system`, `narrator`, `arabic_text_asset_id`, `translation_asset_id`, `translator`, `license_id`, `source_url`, `authenticity_claims[]`, `context_notes[]`, `scholarly_differences[]`, `review_status`, `reviewer_role`, `reviewed_version`.
Do not assume a numeric hadith ID is globally unique. Use composite collection+edition+reference keys and migration mapping.
Reading-session contract: `session_id`, `book_ref`, `page_or_report`, `font_preferences`, `bookmark_ids`, `local_only`. Do not save private reflections to analytics.

## Gameplay rules
Reading a report is never an automatic proof of authenticity or legal instruction. No hadith memorization leaderboards, divine reward currency, forced reading streaks, automated fatwas or fabricated quotations. Educational quiz questions can test bibliographic navigation, citation hygiene and language comprehension only after review.

## Release and test gates
1. Reject unlicensed Arabic/translation/audio assets and incomplete source metadata.
2. Never display unreviewed attributed hadith text in released UI.
3. Preserve edition-specific numbering and source URLs; support ambiguous/variant reports.
4. Reader works with Arabic RTL, English LTR, keyboard, screen reader, touch and offline fallback.
5. Unverified quote in mission is represented as a fictional *placeholder notice*, not invented prophetic wording.
6. Changes to a reviewed text/translation reset its approval.
7. Source-review roles follow docs/ISLAMIC_CONTENT_POLICY.md and docs/ISLAMIC_SOURCE_LEDGER.md.
Related: #3, #9, #11, #17, #35.
