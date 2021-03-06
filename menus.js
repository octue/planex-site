// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import AddCircleIcon from '@material-ui/icons/AddCircle'
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
// import PeopleIcon from '@material-ui/icons/People'
// import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
// import RssFeedIcon from '@material-ui/icons/RssFeed'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'

export const iubenda = {
  cookiePolicy: 'https://www.iubenda.com/privacy-policy/46709371/cookie-policy',
  privacyPolicy: 'https://www.iubenda.com/privacy-policy/46709371',
  termsAndConditions: 'https://www.iubenda.com/terms-and-conditions/46709371',
}

export const main = [
  // {
  //   href: '/press',
  //   icon: RssFeedIcon,
  //   text: 'Press',
  //   style: 'link',
  // },
  // {
  //   href: '/login',
  //   icon: AccountCircleIcon,
  //   text: 'Login / Register',
  //   style: 'link',
  // },
  // {
  //   href: '/beta',
  //   icon: AddCircleIcon,
  //   text: 'Register',
  //   style: 'link',
  // },
  // {
  //   href: '/about#mission',
  //   icon: ScatterPlotIcon,
  //   text: 'Register',
  //   style: 'link',
  // },
  // {
  //   href: '/about#testimonials',
  //   icon: FormatQuoteIcon,
  //   text: 'Register',
  //   style: 'link',
  // },
  // {
  //   href: '/about#faqs',
  //   icon: PeopleIcon,
  //   text: 'Register',
  //   style: 'link',
  // },
  {
    href: '/contact',
    icon: EmailIcon,
    text: 'Contact',
    style: 'link',
  },
  {
    href: 'https://github.com/octue',
    kind: 'external',
    icon: GitHubIcon,
    style: 'icon',
  },
]

export const footer = [
  {
    text: 'Company',
    submenu: [
      // {
      //   href: '/about',
      //   text: 'About',
      //   style: 'link',
      // },
      {
        href: '/contact',
        text: 'Contact',
        style: 'link',
      },
      {
        href: iubenda.privacyPolicy,
        text: 'Privacy',
        style: 'link',
        kind: 'modal',
      },
      {
        href: iubenda.termsAndConditions,
        text: 'Terms & Conditions',
        style: 'link',
        kind: 'modal',
      },
      {
        href: iubenda.cookiePolicy,
        text: 'Cookies',
        style: 'link',
        kind: 'modal',
      },
      // {
      //   href: '/hse',
      //   text: 'HS&E',
      //   style: 'link',
      // },
      // {
      //   href: '/quality',
      //   text: 'Quality',
      //   style: 'link',
      // },
    ],
  },
  // {
  //   text: 'Legal',
  //   submenu: [
  //     // {
  //     //   href: '/help',
  //     //   text: 'Help',
  //     //   style: 'link',
  //     // },
  //   ],
  // },
]

export default main
