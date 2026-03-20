# AlgoTrader Community Landing Page

## Current State
New project. No existing app files.

## Requested Changes (Diff)

### Add
- Full single-page landing page targeting Meta Ads traffic to WhatsApp group
- Hero section: bold headline, subheadline, WhatsApp CTA button, urgency text
- Social proof section: sample trade results table (mix of profit & loss), monthly growth projection, 3 believable testimonials
- How It Works: 4-step process
- Benefits section: 4 key benefits
- Transparency section: honest disclaimers, no guarantee/risk-free language
- Call-to-action section: WhatsApp redirect button + micro-copy
- FAQ section: 4 questions with accordion
- Sticky CTA button on mobile
- Meta Pixel placeholder (FB Pixel code)
- WhatsApp redirect on CTA click

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Minimal backend actor (no real data needed — static landing page)
2. Frontend: Single page React component with all sections
3. WhatsApp redirect: window.open to wa.me link on button click
4. Meta Pixel: placeholder script tag in index.html
5. Sticky mobile CTA: fixed bottom bar on small screens
6. FAQ accordion: local toggle state
