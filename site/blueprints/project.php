<?php if(!defined('KIRBY')) exit ?>

title: Project<a href="project.php" id="" title="project">project</a>
pages: false
files: true
  fields:
    caption:
      label: Caption<a href="project.php" id="" title="project">project</a>
      type: textarea
  sortable: true
fields:
  title:
    label: Title
    type:  text
  featured:
    label: Featured
    type: checkbox
    text: Do you want to display this in the top section menu?
  categories:
    label: Categories
    type: multiselect
    required: true
    search: true
    options:
      art_direction: Art Direction
      advertising: Advertising
      branding: Branding
      creative_direction: Creative Direction
      digital: Digital
      identity: Identity
      exhibition: Exhibition
      environmental: Environmental
      packaging: Packaging
      print: Print
      video: Video
  text:
    label: Description
    type:  textarea
  line:
      type: line
  video_background:
    label: Video Background (vimeo)
    type:  text
  hide_images:
    label: Hide Project Images
    text: Do you want to hide project images?
    type: checkbox
    width: 1
  line2:
      type: line
  video_fullscreen:
    label: Fullscreen Video
    type: checkbox
    text: Do you want to fullscreen the video?
    width: 1/2
  video_controls:
    label: Video Controls
    type: checkbox
    text: Do you want to hide the video controls?
    width: 1/2
  video_sound:
    label: Video Sound
    type: checkbox
    text: Do you want to enable video sound?
    width: 1/2
  video_autoplay:
    label: Video Autoplay
    type: checkbox
    text: Do you want to autoplay the video?
    width: 1/2
  video_loop:
    label: Video Loop
    type: checkbox
    text: Do you want to loop the video?
    width: 1/2