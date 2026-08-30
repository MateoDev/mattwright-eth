---
title: "AgentFi Is About to Bank an Internet of Agents"
description: "Eighteen months from agents that couldn't hold money to a financial stack that can custody, authorize, settle, and audit machine spending. The last piece just clicked in."
date: "2026-08-30"
category: "Thoughts"
readTime: "12 min"
---

In eighteen months we went from agents that couldn't hold money to a financial stack that can custody, authorize, settle, and audit machine spending. The last piece just clicked in.

On August 19th, Stripe announced it was acquiring OpenRouter.

Most of the coverage read it as an AI infrastructure story, which it is. I think it's a banking story, and I think it's the moment a stack that's been assembling in public for eighteen months finally has all its load-bearing parts.

Here's the thing worth noticing. Nobody organized this. There was no consortium, no standards body convening the industry, no summit where crypto and payments agreed to divide the work. And yet if you lay out what shipped between early 2025 and now, it assembles into something that looks unmistakably like a financial system for non-human economic actors — built from both ends at once, by people who mostly weren't talking to each other, converging on the same answers.

That's not a turf war. That's what a real category looks like while it's forming.

## The eighteen months

Run the tape.

x402 revived HTTP's long-dormant 402 "Payment Required" status code and made it mean something. An agent hits an endpoint, gets a price, signs an authorization from its wallet, a facilitator settles on-chain, and the resource is delivered. Stateless, per-request, no account, no relationship, no invoice. It has since cleared 140 million-plus cumulative transactions and $600 million-plus in volume, and it now sits under Linux Foundation governance rather than any one company's.

The Agentic Commerce Protocol arrived from the other direction — OpenAI and Stripe standardizing checkout so an agent could complete a real purchase from a real merchant. It went live inside ChatGPT's Instant Checkout in February, starting with Etsy sellers. Underneath it sits the Shared Payment Token: single-use, time-bound, amount-scoped, and unmodifiable by the merchant after authorization.

Stripe's Agentic Commerce Suite followed in December, giving merchants the other half — product discovery, checkout management, payment, and Radar fraud detection — with the merchant staying merchant of record and picking which agents it will sell through.

MoonPay Agents landed in February: a non-custodial layer letting an AI system generate wallets, trade, swap, move assets, and cross between fiat and crypto on a user's behalf.

The Machine Payments Protocol came in March, co-authored by Stripe and Tempo, and it's the most architecturally interesting of the lot. MPP adds a session layer on top of 402 — the team's own framing is OAuth for money. An agent pre-authorizes a spending envelope, then streams micropayments inside it that batch into single on-chain settlements on Tempo, a payments chain with half-second finality and no native gas token. Critically, it's rail-agnostic: stablecoins, Visa and Mastercard, BNPL, and Bitcoin Lightning, all under one protocol. It launched with over a hundred integrated providers including Browserbase, DoorDash, Nubank, Ramp, and Revolut.

MetaMask Agent Wallet shipped in June — self-custodial, with the agent operating inside rules the human sets. Guard Mode enforces daily spending limits, protocol whitelists, and 2FA above your thresholds; every transaction runs through simulation, Blockaid threat scanning, and MEV protection, with coverage up to $10,000 on transactions cleared as secure. It's framework-agnostic, so it works with Claude Code and Codex as readily as with anything crypto-native, across EVM chains and Hyperliquid.

MoonPay's PayBox arrived in July and closed the consumer gap: ChatGPT and Claude connect over MCP, keys are split with MPC inside secure enclaves, approvals happen by passkey, and you choose between Always Ask and Autonomous with preset limits. It settles over x402 across seven chains.

Google's AP2 has been assembling the authorization layer in parallel, using W3C verifiable credentials to produce cryptographic proof of what a user actually mandated — with Visa, Mastercard, Amex, PayPal, Adyen, Shopify, Worldpay and Coinbase signed on.

And then Stripe bought OpenRouter: 400-plus models, 80-plus providers, the closest thing the industry has to a spot market for inference — acquired by the company that already meters and bills more of the internet's commerce than anyone.

Eighteen months. From "agents can't hold money" to that.

## They're composing, not competing

The instinct with a list like that is to ask who wins. I think that's the wrong question, and the evidence is that the builders themselves aren't asking it.

These protocols sit at different layers and stack cleanly: authorization (AP2), checkout (ACP), settlement (x402 or MPP). Stripe supports both MPP and x402 rather than forcing a choice. Google's AP2 has an x402 extension built with Coinbase. MoonPay runs x402 underneath a ChatGPT integration. MetaMask's agent wallet is deliberately framework-agnostic. Tempo co-authored MPP with Stripe and published it as an open standard instead of a proprietary API.

I've been openly skeptical of incumbents adopting our primitives while discarding our architecture. This isn't that. Stripe could have shipped a closed agent-payments product and used its distribution to make it the default. It shipped an open protocol co-authored with a chain, that settles to stablecoins, and that interoperates with a Coinbase standard now governed by a foundation.

Give credit where it's earned. The unglamorous work of connecting the agent economy to the actual economy — tax, refunds, disputes, reconciliation, the merchant on the other end who just wants the money to land — is work crypto has historically been bad at and largely uninterested in. Somebody had to do it. They're doing it well, and they're doing it in the open.

## Everyone independently invented the same primitive

Here's the detail I find genuinely remarkable.

Look at what these systems actually implement, underneath the branding:

- **Shared Payment Tokens**: single-use, time-bound, amount-scoped.
- **MPP sessions**: pre-authorized spending envelopes, streamed against, settled in batch.
- **MetaMask Guard Mode**: daily limits, protocol whitelists, escalation to human approval above policy.
- **PayBox**: preset spending limits, passkey-authorized, permissions that can't be reused.
- **x402**: per-request signed authorization, scoped to exactly one thing.
- **AP2 mandates**: cryptographic proof of what was authorized, and only that.

That is the same primitive, six times, invented independently by a payments company, a chain, a wallet, an onramp, an exchange, and a search company.

It's **bounded delegation**: this actor is not me, it acts on my behalf, and here is precisely how far it may go, for how long, over how much.

When six teams with different incentives, different users, and different threat models converge on one abstraction without coordinating, that abstraction is not a design choice. It's the shape of the problem. And it means the hardest question in the agent economy has a working answer already deployed at scale.

Bounded delegation is the industry's answer to the accountability question, and it's a good one. You don't resolve agent accountability by making agents trustworthy. You resolve it by making the blast radius small, legible, and revocable in advance. Every system above does that. That's why this is the year it started working.

## What "banking" actually requires

If we're going to bank an internet of agents, it's worth being precise about what a bank does. Five things: custody, payments, identity, record-keeping, and credit.

**Custody** is solved, and solved well. MPC key splitting inside secure enclaves, smart accounts, self-custodial agent wallets where the human holds the keys and the agent holds a permission. This was the scariest problem three years ago and it's now a product decision.

**Payments** is solved several times over, across every rail that matters. Stablecoins, cards, Lightning, BNPL, streamed micropayments, per-request settlement. Whatever the transaction shape, something in the stack above serves it.

**Identity** is half-solved. We can prove what a human authorized — that's AP2's contribution, and it's real. We're much weaker on the agent's own identity: a durable, portable handle for a specific agent, with a history attached, that survives moving between operators. Right now an agent's identity is mostly its operator's identity, which works until the interesting cases start.

**Record-keeping** is arriving, and the Stripe–OpenRouter deal is why. Stripe sees the revenue side of a transaction; OpenRouter sees the cost side — which model, how many tokens, at what price. Together that's the first clean join between what an agent action cost and what it earned.

**Credit does not exist.**

No agent has a credit line. No agent has an underwriting model, a risk score of its own, or a way to borrow against expected future earnings. Every system above is a spending system — it moves money an agent already has permission to move. Not one of them extends an agent capital it doesn't have.

That's the gap. And it's ours.

## Credit is the AgentFi opportunity

Underwriting a non-human borrower is a strange problem for a traditional lender and a familiar one for DeFi.

Think about what an agent actually is from a credit perspective. It has a wallet with a verifiable balance history. It has a payment record that is natively machine-readable — every x402 request, every MPP session, every settled batch. It has a measurable task history: what it was asked to do, what it delivered, what that earned. It has no legal personhood, no jurisdiction, and no ability to be sued, which is exactly why conventional credit can't touch it.

Collateralized, liquidatable, permissionless lending against transparent on-chain history is not a workaround for that problem. It's the natural solution to it. We spent a decade building credit markets that don't require personhood, jurisdiction, or a court — and then mostly used them to lever up trades. The infrastructure was always more interesting than what we did with it.

An agent that can borrow can pre-purchase inference at favorable rates. It can front the cost of a job it will be paid for on completion. It can hold working capital. It can run a business rather than execute a transaction. The difference between an agent with a spending limit and an agent with a balance sheet is the difference between an employee with a corporate card and a company.

The rest of the stack is being built by people better at their part than we are. This part isn't being built by anyone, and it's the part we're uniquely equipped for. On-chain lending markets, reputation and repayment history as underwriting inputs, machine-legible collateral, liquidation that executes in code because there's nobody to take to court.

That's not the consolation prize. That's the layer where an internet of agents stops being a spending problem and becomes an economy.

## What comes next

Eighteen months ago an agent couldn't hold a dollar. Today it can hold keys, be granted a bounded allowance, pay per request across seven chains or on a Visa rail, buy from Etsy inside a chat window, trade on Hyperliquid inside rules you set, and have its compute costs and its revenue reconciled by the same company on the same ledger.

Agents are getting banked. The accounts are opening now, and the people opening them are payments companies, wallets, exchanges, onramps, and chains, all building toward the same thing from every direction at once.

There's one product still missing, and it's the one that turns a funded agent into an economic actor.

Somebody should go build the credit desk.