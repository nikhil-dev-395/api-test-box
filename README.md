


endpoints

- / - health - universal
- /search - searching video
- /streams - streaming a video
- /homescreen - (trending) home screen video's auto generated like random picking

- .video-list
  - video Tag
    - attribute 'poster'
    - source tag with mp4

- NOTE: here we are using [`impit`](https://www.npmjs.com/package/impit/v/0.1.1) npm package instead of axios because it helps for cf bypass
