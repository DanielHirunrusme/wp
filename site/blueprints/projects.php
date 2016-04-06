<?php if(!defined('KIRBY')) exit ?>

title: Projects
pages:
  template: project
files: false
  sortable: true
fields:
  title:
    label: Title
    type:  text
  video_background:
    label: Video Background (youtube or vimeo)
    type:  text
  image_background:
    label: Image Background (can be used as a preview image for video or separately)
    type:  textarea