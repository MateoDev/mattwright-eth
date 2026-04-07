---
title: "4 DApps Built on Quorum at ETHParis 2019"
description: "One-click blockchain setup tools, corporate bonds as payment collateral, a trustless fiat bank account for DApps, and more from ETHParis 2019."
date: "2019-03-14"
category: "TECHNICAL"
readTime: "6 min"
forum_url: "https://medium.com/@mateo_ventures/4-dapps-built-on-quorum-at-ethparis-2019-762ac23de783"
forum_name: "Medium"
---

The Quorum team was at ETHParis. After ETHDenver, ETHParis was next on our list for 2019 — connecting with developers in the Ethereum ecosystem who are looking to build privacy and permissioning features into their applications.

Here are the four projects that built on Quorum and took home bounties from the 48-hour buildathon.

---

## 1. KiwEth — One-Click Blockchain Setup & Performance Testing

**Performance Bounty Recipient**
*Team: Evert Kors, Adrian Barwicki, Muhammed Nagy, Rosco Kalis*

KiwEth is a one-click blockchain tool that gets you up to speed fast. The user enters parameters — number of nodes, consensus algorithm — and KiwEth spins up the network.

**Hosting flexibility:** AWS, Azure, Google Cloud, custom cloud, on-premise, or local. KiwEth itself is hosted on Arweave, so enterprises can interact with it on-premise by running their own Arweave node.

**Performance testing built-in:** Once your network is live, KiwEth lets you run stress tests with configurable parameters:
- Transaction type (EVM opcodes)
- Private transaction recipients (Quorum-specific)
- Transaction volume
- Time between transactions

Metrics collected per-node: CPU, RAM, disk, and network usage, plus transaction processing time.

---

## 2. Nanti — Corporate Bonds as Payment Collateral

**Public/Private Bounty Recipient**
*Team: Alexandre Kurth, Xavier Lavayssierre*

Nanti lets corporate entities issue bonds on an Ethereum-compatible network and use them as collateral for instant payment channels.

Compatible with ERC1400 and related standards for digital securities, Nanti enables bond issuance, redemption, and use as collateral for real-time payments — without requiring a central clearing house. The privacy features of Quorum allow the commercial terms of the underlying bonds to remain confidential between counterparties.

---

## 3. Trustless Fiat Bank Account for DApps

**Privacy Bounty Recipient**

This project tackled one of the hardest problems in crypto UX: letting DApp users pay with fiat without giving up the properties of a blockchain-based application.

The team built a permissioned Quorum layer that sits between traditional banking rails and on-chain DApp logic — allowing users to hold balances in fiat, execute DApp transactions, and settle on-chain without ever directly handling ETH or gas.

---

## 4. PrivaMed — Confidential Medical Records Sharing

*A system for medical providers to share patient records selectively — only what's needed, only with authorized parties.*

Built on Quorum's private transaction model, PrivaMed allows hospitals to share specific record segments (allergies, medications, imaging) with other providers without exposing the full patient file. Access is controlled by permissioned smart contracts. Each share is a private transaction — auditable by the parties involved but invisible to the broader network.

---

*ETHParis had the same energy as ETHDenver — developers building real things in 48 hours. Quorum's tooling has matured enough that teams can get a network running and start building application logic in hours, not days. That's the unlock.*
