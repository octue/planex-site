import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

export const iubenda = {
  cookiePolicy: 'https://www.iubenda.com/privacy-policy/46709371/cookie-policy',
  privacyPolicy: 'https://www.iubenda.com/privacy-policy/46709371',
  termsAndConditions: 'https://www.iubenda.com/terms-and-conditions/46709371',
}

export const nav = [
  {
    href: '/about',
    text: 'About',
    style: 'link',
  },
  {
    href: '/twined',
    text: 'Twined',
    style: 'link',
  },
  {
    href: '/consultancy',
    text: 'Consultancy',
    style: 'link',
  },
  {
    href: '/articles',
    text: 'Articles',
    style: 'link',
  },
  {
    href: '/getinvolved',
    text: 'Get involved',
    style: 'link',
  },
  {
    href: '/contact',
    text: 'Contact',
    style: 'link',
  },
  {
    href: 'https://github.com/octue',
    kind: 'external',
    text: 'GitHub',
    icon: GitHubIcon,
    style: 'link',
  },
]

export const footerItems = [
  {
    href: 'https://twitter.com/octue',
    kind: 'external',
    icon: TwitterIcon,
    style: 'icon',
    ariaLabel: 'twitter',
  },
  {
    href: 'https://linkedin.com/company/octue',
    kind: 'external',
    icon: LinkedInIcon,
    style: 'icon',
    ariaLabel: 'linkedin',
  },
  {
    href: 'https://github.com/octue',
    kind: 'external',
    icon: GitHubIcon,
    style: 'icon',
    ariaLabel: 'github',
  },
]

export const footerLinks = [
  {
    href: '/contact',
    text: 'Contact',
    style: 'subtitle2',
  },
  {
    href: iubenda.privacyPolicy,
    text: 'Privacy',
    style: 'subtitle2',
    kind: 'modal',
  },
  {
    href: iubenda.termsAndConditions,
    text: 'Terms & Conditions',
    style: 'subtitle2',
    kind: 'modal',
  },
  {
    href: iubenda.cookiePolicy,
    text: 'Cookies',
    style: 'subtitle2',
    kind: 'modal',
  },
]
