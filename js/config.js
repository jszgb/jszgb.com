$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: 'JavaScript Zagreb user grupa',

    // Tagline for your site
    siteTagline: 'Place where you can find everything about JavaScript',

    // Email address
    siteEmail: 'dinotrojak@gmail.com',

    // Name
    siteAuthor: 'Dino Trojak',

    // Navigation items
    siteNavItems: [
      { name: 'News', href: '/'},
      { name: 'Slides'},
      { name: 'Onbording', href: 'https://docs.google.com/forms/d/1EwG3SztKxB2VU_0LHpeukF3AOFQil9VSRm6KWrcVl1U/viewform', newWindow: true}
    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 300,

    // Pages folder name
    pagesFolder: 'slides',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

    // Page as Frontpage (static)
    pageAsFrontpage: '',

    // Posts/Blog on different URL
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

     // If Github mode is set, your Github username and repo name.
    githubUserSettings: {
      username: 'jszgb',
      repo: 'jszgb.github.io'
    },

    // If Github mode is set, choose which Github branch to get files from.
    // Defaults to Github pages branch (gh-pages)
    githubSettings: {
      branch: 'gh-pages',
      host: 'https://api.github.com'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
