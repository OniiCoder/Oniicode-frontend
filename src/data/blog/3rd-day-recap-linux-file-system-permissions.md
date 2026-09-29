---
title: "3rd Day Recap: Linux File System Permissions"
date: "2026-09-29"
author: "Peter Onisha"
excerpt: "3rd day recap on the road to DevOps: Diving deep into Linux user accounts, permissions, ownership, and chmod."
slug: "3rd-day-recap-linux-file-system-permissions"
tags: ["DevOps", "Linux", "Security", "Permissions"]
---

Deeper into Linux Operating System but with focus on user accounts and permissions.

### User Categories in Linux
There are 3 categories of users:
- **Root user**: Has unrestricted permissions and full administrative power.
- **User account**: The regular user account you create when you first log in.
- **Service account**: Relevant in Linux as each service on the OS has its own user. It is bad practice to use the root account to run services.

### Central Management
Windows operating system has central management which automatically supports and handles access and permissions for each user, but on Linux, you set up central management yourself using a tool like **LDAP** (Lightweight Directory Access Protocol) — a standard protocol to access a central directory of users, groups, and permissions.

It is very important to have multiple users for Linux servers. The benefits include:
- Granular permissions for each team member
- Traceability (who did what?)

### Levels of Permissions
There are 2 levels of permissions on Linux:
- **User level**: Give permission to a user directly.
- **Group level**: Put users into groups and give permission to the groups.

### Useful Commands for Users & Groups
- `cat /etc/passwd` — Prints the list of users on the OS.
- `sudo adduser [username]` — Creates a new user with the specified username. It automatically assigns a UID and a GID (Group ID) and creates a home directory with skeletal configuration (every user created gets a primary group with the same username).
- `sudo passwd [username]` — Change the password of a user.
- `sudo groupadd [group_name]` — Creates a group. By default the system assigns the next available ID.
- `cat /etc/group` — Lists all groups.
- `sudo usermod -g [group_name] [username]` — Change the primary group of a user.
- `sudo delgroup [group_name]` — Delete a group with the name specified.
- `sudo usermod -aG [group_name1],[group_name2] [username]` — Add a group or list of groups to a user. Note that `-G` overrides existing groups, while `-aG` appends to existing ones safely.
- `groups` — List groups the current user belongs to.
- `groups [username]` — List groups of the specified user.
- `exit` — Log current user out and switch back to the previous user session (I love this command).
- `sudo useradd -G [group_name] [username]` — Add a user at creation time. A default group matching the username is still created, putting the user in 2 groups.
- `sudo passwd -d [username] [group_to_remove_from_user]` — Remove a user from a group.

> **Note on command variations**: Some user & group commands have variations (e.g. `adduser`/`useradd`, `addgroup`/`groupadd`, `deluser`/`userdel`). The first variation (`adduser`) is interactive, prompting you through steps for manual execution. The second variation (`useradd`) is non-interactive and best suited for automation scripts.

### File Ownership
As already established before: **everything in Linux is a file**.
User permissions relate to reading, writing, and executing files.

A few questions to ask when you look at a file:
- Who owns the file and what can they do to/with it?
- What group(s) have access to the file and what can they do to/with it?
- Do other users have access to the file and what can they do to/with it?

### Understanding `ls -l`
Running `ls -l` lists files, folders, and their permissions:
```bash
drwxrwxr-x peter devops ...
-rw-rw-r-- ...
```

The permission string can be broken down as follows:
- `d` — Indicates a directory (`-`: regular file, `c`: character device file, `l`: symbolic link).
- `rwx` (1st triad) — **User / Owner**: Read (`r`), Write (`w`), Execute (`x`). A `-` means that permission is not granted (e.g. `r--` means read-only).
- `rwx` (2nd triad) — **Group**: Read, Write, Execute for the group of the file.
- `r-x` (3rd triad) — **Others / World**: Read, Write, Execute for every other user. If set to `---`, others cannot read, write, or execute.

### Commands for Permissions Modification
- `sudo chmod -x [file/folder]` — Remove execute permission.
- `sudo chmod g-w [filename]` — Take away write permission from the group. You can switch `g` for `u` (owner), `o` (others), or `a` (all).
- `sudo chmod g+w [filename]` — Add write permission for the group.
- `sudo chmod u=rwx,g=rx,o=r [filename]` — Set exact permission blocks for owner, group, and others.
