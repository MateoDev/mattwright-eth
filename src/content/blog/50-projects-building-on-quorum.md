---
title: "50+ Projects Building on J.P. Morgan's Quorum Blockchain"
description: "A comprehensive list of projects using and building on Quorum's private/permissioned blockchain across banking, healthcare, supply chain, and more."
date: "2019-08-08"
category: "TECHNICAL"
readTime: "10 min"
forum_url: "https://medium.com/@mateo_ventures/heres-who-s-building-on-quorum-see-the-list-b18d65aa0a2c"
forum_name: "Medium"
---

Quorum is a fork of Go Ethereum, designed to process private transactions with a permissioned group of known participants. Developed and maintained by J.P. Morgan, it addresses the specific challenges of blockchain adoption in enterprise environments: privacy, speed, throughput.

Private blockchains like Quorum are most useful when you have geographically distributed network members, limited trust between participants, and no need for central control. The most common use cases are asset and supply chain systems, multi-party financial settlement, real-time auditing, and data integrity.

*Note: this list ranges from proof-of-concept to production-ready. Not all are officially recognized — this is publicly available information. If you're building with Quorum, reach out at info@goquorum.com to be featured.*

---

## 1. Banking & Finance

### Tokenized Cash

**JPM Coin** — Instant settlement of transactions between J.P. Morgan wholesale payment clients.

**IHS Markit** — An immutable digital ledger of all cash movement in the Financial Services Industry. Their Quorum-based system (called Stax) handles the payments leg of syndicated loan trading — designed to eliminate the last mile of wire transfers, where each transaction has its own wire.

### Interbank Payments with Central Banks

**Project Ubin** — The Monetary Authority of Singapore, J.P. Morgan, and other industry leaders explored using blockchain for clearing and settlement of payments and securities. Phase 5 successfully demonstrated payments in different currencies on the same network using Quorum.

**Project Khokha** — South Africa Reserve Bank used Quorum to simulate interbank clearance and settlement, successfully processing the country's typical 70,000 daily transactions within two hours.

### Trade Finance

**Komgo** — A blockchain platform for commodity trade finance, enabling banks and corporates to digitize letters of credit and other trade documents on a permissioned Quorum network.

**Voltron** — Built on R3's Corda and also piloted on Quorum, enabling paperless letters of credit to move in hours instead of weeks.

---

## 2. Healthcare

**Solve.Care** — A global healthcare administration platform using Quorum to manage care coordination, benefits administration, and payments across patients, providers, and payers.

**BurstIQ** — A health data marketplace on Quorum enabling patients to own and monetize their health data while maintaining HIPAA compliance through private transactions.

---

## 3. Supply Chain

**MineSpider** — Tracks minerals through supply chains to ensure conflict-free sourcing, using Quorum's privacy features to protect proprietary commercial relationships while providing auditability.

**Covantis** — A post-trade execution platform for agricultural commodity trading, reducing settlement time and errors in grain trade documentation.

---

## 4. Energy

**Energy Web Chain** — Built a Quorum-based network for energy sector participants to track renewable energy certificates, grid assets, and carbon credits.

**LO3 Energy** — Enables peer-to-peer energy trading between prosumers in local energy markets using a permissioned Quorum network.

---

## 5. Gaming & Media

**Ujo Music** — Explored Quorum for royalty distribution with privacy for commercial terms between artists and labels.

**Virtue Poker** — A fair poker platform using Quorum for game state management with private card dealing.

---

## 6. Identity & Government

**Atheneum** — Digital identity for refugees, allowing individuals to carry verifiable credentials as they move between camps and jurisdictions.

**Civic** — Piloted Quorum for privacy-preserving identity verification where KYC data is shared only with permissioned parties.

---

## 7. Real Estate

**Harbor** — A compliance platform for tokenizing real estate and private securities on Quorum, with R-Token providing investor-level regulation compliance.

**Propy** — International real estate transaction platform using blockchain for title transfer and contract execution.

---

*This list was last updated July 2020. The Quorum ecosystem has grown significantly since — many of these projects have since migrated to ConsenSys Quorum (now Hyperledger Besu + Tessera) or other EVM-compatible chains.*
