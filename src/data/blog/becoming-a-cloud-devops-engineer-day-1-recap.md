---
title: "Becoming a Cloud/DevOps Engineer: Day 1 Recap"
date: "2026-09-27"
author: "Peter Onisha"
excerpt: "1st day recap on the road to becoming a Cloud/DevOps Engineer: Operating systems, kernels, hypervisors, and virtualization fundamentals."
slug: "becoming-a-cloud-devops-engineer-day-1-recap"
tags: ["DevOps", "Cloud", "Linux", "Virtualization"]
---

Yesterday was back-to-the-basics kinda day, felt like I was back in my Operating Systems classroom in University. Loved it!

### Learnings

#### 1. The DevOps Role & Agile
DevOps role was originally created as a solution to a communications and work collaboration problem between two IT departments; development (Dev) team and IT operations (Ops) team. It was rather just a cultural and operational practice but now is a full blown role. The DevOps engineer has common language with both the Dev and Ops team.

DevOps and Agile Methodology (in a tech setting or project) are complementary practices that work together to optimize the entire software development and delivery lifecycle.

#### 2. Operating System Responsibilities
The operating system:
- Interacts with and allocates hardware resources
- Manages fair usage of resources
- Process management
- Memory management
- Storage management
- Manages file system
- Security (users and permissions) and network (ports and IP addresses)
- Isolates contents of applications

#### 3. The Kernel
The operating system’s kernel is a program considered as the heart of every operating system. It loads first and is responsible for managing resources and their allocation for applications and processes. It was interesting to note that it cleans up the resources when apps shut down.

#### 4. Kernel Types Across Systems
- Ubuntu, Mint, Android all use the Linux Kernel.
- MacOS, iOS use Darwin Kernel.

#### 5. Linux on Servers
Operating systems for servers are mostly Linux because it is more lightweight and performant.

#### 6. Linux Mastery
Knowing Linux is a must for DevOps.

#### 7. Hypervisors
Hypervisors make it possible to host multiple operating systems on a single physical computer on top of the operating system it already has.

#### 8. Virtual Machines (VMs)
Virtual machines are completely isolated and borrow hardware resources from the host operating system. You should create virtual machines for learning, testing, and experimentation as it is considered safe and has no negative effect on the host machine in case of incidents like a hack, crash, or any other issues that occur on the virtual machine.

#### 9. Hypervisor Types
- **Type 2 / Hosted Hypervisors**: Makes it possible to create virtual machines on top of an existing host operating system.
- **Type 1 / Bare Metal Hypervisors**: Makes it possible for virtual machines to be installed directly on the hardware.

#### 10. Resource Allocation in Virtualization
Virtualization is very important as it aids with the efficient usage of hardware resources. Users can configure a cocktail of resources of their choice.

#### 11. Hardware Abstraction
Virtualization made it possible for abstraction of the Operating System from the hardware. This way, it is portable and we can easily secure and move our data.
