<?php if(!defined('KIRBY')) exit ?>

title: Page
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  callout:
    label: Callout
    type:  textarea
  clients:
    label: Clients
    type:  textarea
  awards:
    label: Awards
    type:  textarea
  video_background:
    label: Video Background (youtube or vimeo)
    type:  text
  image_background:
    label: Image Background (can be used as a preview image for video or separately)
    type:  textarea