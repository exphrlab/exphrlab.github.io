---
# Homepage settings
title: "iSTEP"
date: 2022-10-24
type: landing

design:
  spacing: '6rem'   # default section spacing

sections:

  # iSTEP 소개
  - block: markdown
    id: istep
    content:
      title: "About the iSTEP Study"
      subtitle: ""
      text: |-
        **Participants** are randomized into *Music + Exercise* or *Exercise* group.  
        Exercise routines are identical for both groups.

        🎵 **Music Group:** Receives personalized playlists based on their own music interests.  
        💪 **Exercise Group:** Performs the same exercise sessions without music.

        By providing enjoyable, beat-enhanced music, we aim to improve participants’ relationship to exercise and motivation.  
        We believe those in the music group will engage in **greater physical activity** compared to those who do not.

        As our study population consists of sedentary older adults, all exercises are **accessible and scalable** (using a band, chair, wall, etc.).
    design:
      columns: "1"

  # Our Team (사람 카드 자동 생성)
  - block: collection
  id: team
  content:
    title: "Our Team"
    page_type: authors
    filters:
      folders:
        - authors
  design:
    view: card
    columns: 3


  # Research(연구 소개 간단 블록 — 필요에 맞게 수정 가능)
  - block: markdown
    id: research
    content:
      title: "Research"
      subtitle: ""
      text: |-
        We study how **music and rhythm** can motivate movement in older adults.  
        Our work combines **exercise science**, **audio signal processing**, and **field interventions**.
    design:
      columns: "1"

  # Publications(대표/최근)
  - block: collection
    id: publications
    content:
      title: "Publications"
      text: ""
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  # News & Events
  - block: collection
    id: news
    content:
      title: "News & Events"
      page_type: blog
      count: 5
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]

  # FAQs
  - block: markdown
    id: faqs
    content:
      title: "FAQs"
      text: |-
        **Who can join?**  
        Sedentary older adults who are able to perform light exercises.

        **What is the time commitment?**  
        Identical exercise sessions for both groups; the Music group listens to personalized playlists.

        **Do I need special equipment?**  
        No. Exercises are designed to be **accessible and scalable** (band, chair, wall, etc.).
    design:
      columns: "1"

  # Join Us
  - block: markdown
    id: join
    content:
      title: "Join Us"
      text: |-
        Interested in participating or collaborating?  
        Email us at **you@example.com** or use the **Contact form** below.
    design:
      columns: "1"
---
