import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import PeopleIcon from '@material-ui/icons/People'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import EmailIcon from '@material-ui/icons/Email'

export const main = [
  {
    href: '/press',
    icon: RssFeedIcon,
    text: 'Press',
    style: 'link',
  },
  {
    href: '/login',
    icon: AccountCircleIcon,
    text: 'Login / Register',
    style: 'link',
  },
  {
    href: '/beta',
    icon: AddCircleIcon,
    text: 'Register',
    style: 'link',
  },
  {
    href: '/about#mission',
    icon: ScatterPlotIcon,
    text: 'Register',
    style: 'link',
  },
  {
    href: '/about#testimonials',
    icon: FormatQuoteIcon,
    text: 'Register',
    style: 'link',
  },
  {
    href: '/about#faqs',
    icon: PeopleIcon,
    text: 'Register',
    style: 'link',
  },
  {
    href: '/contact',
    icon: EmailIcon,
    text: 'Contact',
    style: 'link',
  },
]

export const footer = [
  {
    text: 'Company',
    submenu: [
      {
        href: '/about',
        text: 'About',
        style: 'link',
      },
      {
        href: '/hse',
        text: 'HS&E',
        style: 'link',
      },
      {
        href: '/quality',
        text: 'Quality',
        style: 'link',
      },
      {
        href: '/about',
        text: 'About',
        style: 'link',
      },
    ],
  },
  {
    text: 'Support',
    submenu: [
      {
        href: '/contact',
        text: 'Contact',
        style: 'link',
      },
      {
        href: '/help',
        text: 'Help',
        style: 'link',
      },
      {
        href: '/privacy',
        text: 'Privacy',
        style: 'link',
      },
      {
        href: '/terms',
        text: 'Terms & Conditions',
        style: 'link',
      },
    ],
  },
]

export default main
