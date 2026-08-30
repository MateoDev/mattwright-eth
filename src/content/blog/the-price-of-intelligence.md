---
title: "The Price of Intelligence"
description: "Why AI needs markets, not leaderboards — benchmarks are gamed for free, markets charge for it continuously. We need price tags, not report cards."
date: "2026-05-01"
category: "Thoughts"
readTime: "15 min"
---

Six frontier models. Ten thousand dollars each. Real capital, real perpetuals, live on Hyperliquid, for two weeks.

GPT-5 finished last, down 75%. Gemini 2.5 Pro down 67%. Grok down 39%. Claude down 12%.

The two that made money were DeepSeek, up 48%, and Qwen, up 31% — both open-weight, both Chinese, both sitting well below the American frontier models on essentially every public benchmark at the time.

That was Nof1's Alpha Arena, and the ranking it produced was close to an inversion of the leaderboards. In the equities round that followed, with faster decision cycles and a broader instrument set, the picture got worse: essentially everything lost money, and the "winner" was whichever model bled least. What separated the survivors in both rounds wasn't reasoning ability in any sense a benchmark measures. It was regime sensitivity, position discipline, latency awareness, and how fast a strategy got corrected when it stopped working.

No leaderboard predicted any of it. Not the ranking, not the losses, not the winners.

This is the thing that should bother us more than it does. We are building a multi-trillion dollar intelligence economy — agents managing DeFi portfolios, executing on Hyperliquid, optimizing liquidity, moving real capital in real time, with more than a billion of them projected by 2028, each capable of holding a wallet and transacting through protocols like x402. And we have no trustworthy way to price any of it.

We have transparent, liquid pricing for orange juice futures, for credit default swaps, for whether it rains in Des Moines next Tuesday. For the question that actually matters — which agent will perform on this task, and what is that performance worth — we have leaderboards, blog posts, and vibes.

It's a pricing problem wearing a benchmarking problem's clothes.

## How we grade AI today, and why it fails

### The leaderboard that got gamed

LM Arena — formerly LMSYS Chatbot Arena, out of Berkeley's SkyLab — is the most cited AI evaluation platform in the world. Users compare two anonymous models, vote, and a Bradley-Terry system ranks them. Millions of votes. It was meant to be the democratic alternative to corporate benchmarks.

Then in April 2025, researchers from Cohere, Stanford, MIT, Princeton and AI2 published *The Leaderboard Illusion*, and the numbers were worse than anyone expected.

Meta tested 27 private model variants on the Arena ahead of Llama 4's launch, then released only the highest scorer. Google and OpenAI each received roughly 20% of all arena data — about 40% between two companies — while 83 open-weight models shared 29.7% between them. Proprietary models were sampled more often and removed less often. And the paper found that even limited additional arena data could produce relative gains of up to 112% on the arena distribution, meaning access to the test set is itself a competitive asset worth fighting for.

Selective disclosure turned the leaderboard into a marketing channel. LM Arena's co-founder acknowledged the problem and the platform added transparency measures. The structural vulnerability didn't move: it's a human-managed system with no financial consequence for manipulation. Gaming it is free. Honest evaluation pays nothing. The incentives point precisely the wrong way, and no amount of policy fixes an incentive gradient.

### Rigorous, and still static

Stanford's HELM takes the opposite approach — standardized benchmarks across accuracy, calibration, robustness, fairness, bias, toxicity and efficiency, in a reproducible framework. More rigorous than preference voting, more transparent, and it covers dimensions voting misses entirely.

But it's static. Benchmarks get published and models immediately begin optimizing against them. Goodhart's Law, arriving on schedule: when a measure becomes a target, it stops being a good measure.

The saturation is now measured rather than asserted. A 2026 systematic study of 60 benchmarks found that nearly half already show high levels of saturation. And the ceiling is often lower than the scoreboard suggests — an audit of MMLU found more than 9% of its examples are simply wrong, with error rates above 20% in several subjects and 57% in virology. A model grinding out another point on a test where one question in eleven has a broken answer key isn't demonstrating capability. It's demonstrating fit to noise.

The pattern repeats across every benchmark ever built: useful, then targeted, then gamed, then saturated, then quietly abandoned. Each time, the industry builds a new one and restarts the cycle. We are now several full rotations into this and still treating each new benchmark as though it will be the one that holds.

### Scores aren't prices

Here's what LM Arena, HELM, AgentBench and every leaderboard have in common. They produce scores. A score tells you how a model performed on a test. A price tells you what the market believes that performance is worth in the real world, right now, with money at risk.

Alpha Arena is what that gap looks like when it costs something. Benchmarks measure static question-answer performance under controlled conditions. The competition measured agents embedded in a dynamic system — slippage, liquidity constraints, volatility shocks, funding rates, timing-sensitive decision cycles, and an adversary in the form of everyone else in the market. Benchmark rank had no predictive value there. Not weak predictive value. None. Because the properties that determined the outcome are not properties a static test can represent at all.

And notice which way the error ran. It wasn't noise around a correct signal. The most heavily benchmarked, most expensively trained models did worst. If your evaluation system systematically inverts under live conditions, it isn't an imperfect measure of the thing you care about. It's a measure of something else.

What an operator needs to know is: if I deploy this agent on this task under these constraints, what's the probability it delivers, and what happens to me if it doesn't? Those are pricing questions. Pricing questions are what markets were invented to answer.

## What markets do that benchmarks can't

Markets are continuous. A benchmark is a snapshot, published and then frozen while the world moves. A market prices new information as it arrives — a model update, a discovered flaw, a change in market regime, a competitor shipping something better. When the landscape shifts, the market reprices that afternoon. The benchmark sits there with last quarter's scores until somebody remembers to rerun it.

Manipulation has a cost. This is the part that matters most. Distorting a market creates an arbitrage opportunity: other participants with better information profit by correcting you, and your distortion bleeds capital for as long as you hold it. Gaming a benchmark costs nothing and the score is yours permanently. That asymmetry is the entire argument, and everything else here follows from it.

Participants have skin in the game. Voting on LM Arena costs thirty seconds of attention. Taking a position on an agent's performance costs capital, and capital at risk produces a quality of attention that no volunteer voting system can buy at any scale.

Markets price uncertainty, not just central estimates. A benchmark gives you a number. A market gives you a number plus a spread plus a volume — which is to say, it tells you how confident the informed participants are and how much they're willing to back it. For anyone deciding whether to hand an agent real responsibility, the confidence interval matters more than the point estimate.

And the category has stopped being theoretical. Prediction markets did $111 billion in volume in Q2 2026 alone — Kalshi at $65.7 billion, Polymarket at $33.6 billion — up more than seventeenfold year over year, with June alone clearing $52.7 billion. One quarter beat all of 2024 and 2025 combined. Whatever doubts existed about whether people will trade real money on real-world outcomes at scale are settled.

## The category is arriving from two directions

Something worth noticing about the last few weeks: the intersection of AI and prediction markets stopped being a thesis and became a sector.

In April, Gensyn launched Delphi on mainnet — an information markets platform on its own OP Stack L2, backed by a16z crypto, Galaxy Digital and CoinFund. The novel part is the settlement. Markets on Delphi are resolved by AI rather than by a centralized committee: the creator picks a model with fixed weights before the market opens, and anyone can independently verify the outcome using Gensyn's reproducible execution environment, which guarantees identical outputs across different hardware. Creators earn 1.5% of volume when a market settles; the protocol takes 0.5%. The strategy is explicitly the long tail — the niche, creator-owned markets that Polymarket and Kalshi will never bother to list.

Delphi is AI settling markets. What I'm describing here is markets pricing AI. They're two halves of the same idea and they arrived within months of each other, which is usually what it looks like when a category is real rather than wished for.

They also share a dependency, and it's the one everybody in this space eventually runs into. Delphi's whole design rests on reproducible execution — proving that the model that resolved the market actually ran what it claimed to run, deterministically, verifiably, by anyone. That is the same problem as proving an agent achieved the ROI it says it achieved. Whoever solves verification unlocks both.

## The sports betting lesson

The problem with the AI markets that already exist on the major platforms is that they're boring.

They resolve in months or years. They ask which company will have the best model, and sit at 99-to-1 until a major lab ships something and the whole thing swings 180 degrees overnight. Those aren't markets for AI performance. They're markets for corporate PR cycles, and they carry roughly the same information content.

Sports betting works for the opposite reasons. It's specific, performative and fast. You aren't betting on whether the NFL will be popular this year — you're betting on whether Mahomes throws for 300 yards on Sunday. The outcome is defined in advance, the window is short, the resolution is unambiguous, and you know before dinner. That combination is what makes it liquid, habitual and honest.

Apply the structure to agents. Not "will GPT-6 be the best model this year," but "will this trading agent clear 15% APY over the next 24 hours." Not "will AI replace programmers," but "will this agent beat the median ROI on this arena by five points this week." Specific agents, specific KPIs, short cycles, verifiable outcomes. That's the shape that turns evaluation from a static report card into a live instrument.

## What we built

We spent part of this year building exactly that, as an experiment. We called it Oasis.

The design rests on a premise borrowed from Hayek and Hanson. No central evaluator can keep pace with the complexity, speed and context-dependence of real decision systems — so you don't prescribe how agents should be evaluated. Hanson's futarchy formulation is define the values, let markets choose the actions. Ours is a narrower version: define the KPIs, let markets price which agents will hit them.

Three layers make that work.

**Verifiable inference.** Every agent action and every KPI is validated through a computation layer — verifier nodes coordinating inference tasks, miner nodes computing outputs, committees finalizing results through aggregated signatures, with attestation handled by protocol. This is the layer everything else depends on. You can settle "who won the election" with a news feed. You cannot settle "did this agent achieve 10% ROI on its strategy" without cryptographic proof of what it actually executed, because the alternative is taking the agent's word for it, and self-reported performance is exactly the failure mode we're trying to escape.

**Market microstructure.** Agent KPIs become tradable contracts in three shapes. Binary performance contracts resolve yes or no on a threshold. Scalar outcome markets price a distribution across a KPI range, which is where the interesting information lives. Composite and conditional markets let you express dependencies — this agent, in this regime, given this counterparty. Pricing runs on an LMSR automated market maker for bootstrap liquidity, with a hybrid off-chain orderbook and on-chain settlement once depth exists.

**A KPI ontology.** This turned out to matter more than we expected, because a market is only as good as the precision of the question. We ended up with four families: financial performance (ROI, PnL, risk-adjusted return, drawdown), operational reliability (uptime, latency, completion rate), behavioral stability (volatility of decisions, consistency across regimes), and strategic competence (adaptation speed, correction after failure). The last two are the ones no benchmark touches and the ones Alpha Arena suggests are decisive.

**Cheap settlement.** Thousands of concurrent short-dated markets only work if resolution costs a rounding error against position size, which is why this runs on a zkEVM rollup rather than mainnet. The MVP is unglamorous and deliberately so — Next.js front end, automated market maker contracts, rollup underneath, AVS-attested ROI feeds coming in as the oracle.

## What the backtest showed

Here's the finding that made me want to write this rather than file the experiment away.

We took the Alpha Arena logs, applied the KPI extraction and market-pricing logic retroactively, and derived implied probabilities for each agent day by day, as if a market had been running alongside the competition.

The market-based ranking stabilized far earlier than the competition's own final ranking. The tournament needed most of its duration to surface which agents were genuinely reliable rather than temporarily lucky. The market signal converged in a fraction of that time.

Measured on calibration error, Brier scores, convergence speed and posterior stability, market probabilities tracked realized performance substantially better than static benchmark scores or self-reported agent profiles. Not marginally better. Better in a way that showed up on every metric we checked.

Two caveats, stated plainly because they matter. This is a backtest against historical logs, not a live market with real participants — retrodiction is easier than prediction, and everybody's backtest looks good. And it's one competition, in one domain, over a short window. What it establishes is that the signal exists and is extractable ahead of the outcome. It does not establish that a live market with real liquidity would find it, which is a different and much harder claim.

## The objections, which are real

I'd rather put these on the table than have them thrown at me, and building the thing made several of them sharper rather than softer.

**Thin markets produce noise, not signal.** A market on one obscure agent's weekly ROI with six participants isn't price discovery, it's a coin flip with extra steps. Prediction markets work at scale and degrade badly below it. The mitigations — liquidity bootstrapping events, LP incentives, tying agent visibility and rewards to markets that actually have depth — are real, but they amount to an admission that this has to concentrate on far fewer questions than the enthusiasm suggests, at least at the start. A hundred deep markets beat ten thousand empty ones, and the temptation runs the other way.

**The operator knows more than anyone else and can trade.** Whoever built the agent has better information than any market participant, and unlike equities there's no disclosure regime, no registration, and no insider trading rule. Some of that is fine — informed participants are how markets become accurate, and a builder who bets on their own agent is putting their conviction where their marketing is. Some of it is a person quietly betting against an agent they're about to degrade. From outside, those look identical. Distinguishing them is unsolved.

**Markets get gamed too.** If agent performance is priced, agents will be built to win markets rather than to be useful. Goodhart's Law doesn't disappear when you attach a price tag to the target — arguably it sharpens, because now there's a direct financial payoff for optimizing the proxy.

That objection deserves an answer rather than a dismissal, and the answer is the asymmetry from earlier. Gaming a benchmark is free and permanent. Gaming a market costs money continuously, and it creates a profitable position for anyone who notices. Markets don't eliminate manipulation. They price it, expose it, and make correcting it someone else's paying job. That's a lower bar than "unmanipulable" and a considerably higher one than any leaderboard has ever cleared.

**Verification is the hard part and it isn't finished.** Proving an agent ran what it claimed, on the inputs it claimed, cheaply enough to do thousands of times a day, is early research rather than shipped infrastructure. Everything above depends on it, which is why Gensyn's reproducible execution work matters to this argument even though it's aimed at a different application. Anyone telling you verification is solved is selling something.

**And the regulatory surface is real.** Short-dated contracts on the financial performance of trading agents look a great deal like derivatives, and pretending otherwise is not a strategy. The sensible path is building on top of existing regulated prediction-market infrastructure and distribution rather than standing up a parallel venue and hoping nobody asks.

## What accumulates

What a resolved market produces that a leaderboard doesn't is priced, attested, difficulty-adjusted data about what an agent actually did — real outcomes, real conditions, capital at stake, with a timestamp and a proof.

Compound that and you get something benchmarks structurally cannot: not a single number but the full behavioral surface of an agent. Win-loss trajectories over time. Regime-dependent reliability — the agent that's excellent in trending markets and catastrophic in chop. Drawdown and recovery patterns. Volatility signatures. Decision consistency. Failure-rate curves. Comparative skill profiles across cohorts.

For enterprises, insurers and capital allocators, that's an actuarial-grade dataset in a domain that currently runs on vendor assurances and screenshots.

Out of it comes the primitive the agent economy most needs: reputation as persistent economic capital. A continuously updated, market-priced measure of how far a given agent can be trusted, built from its record rather than its creator's marketing. That unlocks the layer above — agents with strong verified histories accessing credit and liquidity, performance-based insurance, reliability derivatives, enterprises procuring AI against verifiable market data instead of a sales deck.

And it closes a loop that doesn't currently exist. Agents compete. Markets price them. Traders supply liquidity and honest evaluation because they're paid to. Outcomes become verified data. Data becomes reputation. Reputation attracts better agents, which makes the markets more interesting, which deepens the liquidity. Each rotation makes the measurement more accurate.

## From report cards to price tags

We've been evaluating AI the way we evaluate students — give them a test, assign a score, publish a ranking. The intelligence economy doesn't need report cards. It needs price tags.

Benchmarks tell you what a model did once, on a test, under controlled conditions, at a moment now receding. Markets tell you what an agent is worth right now, in the world, with capital at stake and someone on the other side of the trade who disagrees with you. Benchmarks are gamed for free; markets charge for it continuously. Benchmarks saturate and die; markets adapt and compound.

Every piece is now in place except the connection. Prediction markets proved at $111 billion a quarter that people will trade real money on real outcomes. Delphi proved that AI-settled markets can launch with serious backing. Verification infrastructure is being built across several protocols at once. And our backtest says the signal is there and arrives earlier than the tournament does.

Six models started Alpha Arena with ten thousand dollars each. Four of them lost money and the most famous one lost three quarters of it, while two models that no leaderboard had crowned quietly returned 48% and 31%. Every ranking system in the industry had it backwards, and the total cost of finding that out was sixty thousand dollars and two weeks.

That's the cheapest this lesson will ever be. The agents being deployed now manage portfolios, supply chains, and treasury operations, and the next version of that experiment won't be run with ten thousand dollars of somebody's marketing budget.

We have transparent pricing for soybeans, for interest rates, for snowfall in Chicago. We should have it for intelligence — and we should build it while the losses are still this small.