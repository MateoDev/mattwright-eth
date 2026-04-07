---
title: "Quorum Monthly Brief — August 2020"
description: "Quorum v2.7, Tessera updates, Windows support in Wizard, and how to get involved with the community."
date: "2020-08-13"
category: "TECHNICAL"
readTime: "5 min"
forum_url: "https://medium.com/@mateo_ventures/quorum-monthly-brief-august-2020-5f75158a9664"
forum_name: "Medium"
---

We have done a significant amount of work over the last month.

We released Quorum v2.7 — a huge push from the team. The Quorum engineering team also made enhancements to Tessera, Wizard, Cakeshop, and Qubernetes, open sourced a new tool for stress testing, shipped a Terraform Provider plugin for network provisioning automation, and added new plugins for key management and AuthN/AuthZ.

On top of that, we worked with the team at Splunk to bring the community a new selector for third-party tools in Quorum Wizard — you can now deploy the Quorum Splunk App without leaving the command line.

---

## Developer Updates

### Quorum v2.7

Major new features in this release:

- **Private contract state extension** — support for adding new members to existing private smart contracts (Beta)
- **HashiCorp Vault account management** — account management via external plugin with open-sourced SDK (Beta)
- **JSON RPC API OAuth/AuthZ** — protect JSON RPC APIs via a plugin interface (Beta)

Full release on [GitHub](https://github.com/ConsenSys/quorum).

### Tessera 0.10.6

- Bootstrap mode support
- Custom encryptor type (`CUSTOM`) with Unbound's UKC as pilot implementation
- Logging improvements and catalog log messages
- Localhost peer recognition with IP or hostname

### Quorum Wizard v1.2

- Added Quorum 2.7.0
- **Windows support** — run the wizard on Windows to generate docker-compose or kubernetes networks
- Splunk as optional third-party tool alongside docker-compose networks

Update via:

```bash
npm install -g quorum-wizard
# or without installing:
npx quorum-wizard
```

### Qubernetes v0.1.3

- Cakeshop support — easily deployed via qubernetes on Kubernetes
- Prometheus geth/quorum metrics collection
- Grafana docker-compose dashboard for optional deployment

### Quorum Profiling Tool (Open Sourced)

A new stress-testing tool for Quorum networks is now open source. Use it to benchmark transaction throughput under load.

---

## Get Involved

If you're looking to host a webinar for your community, write articles that educate developers on Quorum features, get involved in Slack, or produce content that demos how to build on Quorum — the team is happy to help. Reach out at info@goquorum.com.
