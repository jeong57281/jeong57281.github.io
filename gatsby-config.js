module.exports = {
  siteMetadata: {
    name: 'JeongHyeon Park',
    nickname: 'ppwag',
    description: '안녕하세요. 풀스택 개발자를 꿈꾸는 대학생 박정현입니다.',
    about: '2021년 캡스톤 디자인 프로젝트를 진행하며 우연히 알게 된 JavaScript 의 범용성에 감탄하여 계속해서 공부하는 중입니다.',
    skills: [
      {
        name: 'JavaScript',
        image: '/img/skill/javascript.png'
      },
      {
        name: 'TypeScript',
        image: '/img/skill/typescript.png'
      },
      {
        name: 'CSS3',
        image: '/img/skill/css.png'
      },
      {
        name: 'HTML5',
        image: '/img/skill/html.png'
      },
      {
        name: 'Vue',
        image: '/img/skill/vue.png'
      },
      {
        name: 'React',
        image: '/img/skill/react.png'
      },
      {
        name: 'Sass',
        image: '/img/skill/sass.png'
      },
      {
        name: 'Express',
        image: '/img/skill/express.png'
      },
      {
        name: 'Gatsby',
        image: '/img/skill/gatsby.png'
      },
      {
        name: 'GraphQL',
        image: '/img/skill/graphql.png'
      },
      {
        name: 'Electron',
        image: '/img/skill/electron.png'
      }
    ],
    projects: [
      {
        image: '/img/project/foodfilter.png',
        title: 'Food Filter',
        description: '여럿이 같은 화면에서 자신의 음식 종류 필터를 공유하여, 모두가 먹고 싶어하는 음식점의 위치를 검색할 수 있는 지도 웹 서비스 입니다.',
        links: [ // up to 4
          {
            name: 'Github Repository',
            href: 'https://github.com/jeong57281/foodfilter-FE'
          },
          {
            name: '프로젝트 후기',
            href: 'https://jeong57281.github.io/post/food-filter'
          },
          {
            name: '프로젝트 리펙토링',
            href: 'https://jeong57281.github.io/post/food-filter-refactoring'
          },
          {
            name: 'Website',
            href: 'https://dev.foodfilter.kro.kr'
          }
        ]
      },
      {
        image: '/img/project/knu-schedular.jpg',
        title: 'KNU LMS Schedular',
        description: '코로나 19 시대 비대면 수업에 사용되는 공주대학교 LMS 의 강의 정보를, 크롤링하여 한 눈에 확인할 수 있도록 Electron 을 이용해 만든 데스크톱 앱 입니다.',
        links: [
          {
            name: 'Github Repository',
            href: 'https://github.com/jeong57281/knu-lms-scheduler'
          },
          {
            name: '프로젝트 후기',
            href: 'https://jeong57281.github.io/post/knu-lms-scheduler'
          }
        ]
      },
      {
        image: '/img/project/blog.png',
        title: '기술 블로그',
        description: 'Gatsby 를 이용해 개발한, 포트폴리오 용도로도 사용 가능한 기술 블로그 입니다.',
        links: [
          {
            name: 'Github Repository',
            href: 'https://github.com/jeong57281/jeong57281.github.io'
          },
          {
            name: 'Gatsby 기술 블로그 제작기',
            href: 'https://jeong57281.github.io/post/Gatsby-%EA%B8%B0%EC%88%A0-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%A0%9C%EC%9E%91%EA%B8%B0/'
          }
        ]
      }
    ],
    educations: [
      {
        name: '공주대학교 컴퓨터공학과',
        description: '(2017.03 ~ 현재)'
      }
    ],
    postPerPage: 4,
    profile: '/img/profile/profile.jpeg',
    github: 'https://github.com/jeong57281',
    instagram: 'https://www.instagram.com/j__ghy__/',
    gmail: 'jeong5728@gmail.com',
    blog: 'https://ipwag.tistory.com/',
    utterances: {
      repo: 'jeong57281/jeong57281.github.io',
      theme: 'github-dark'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/layouts`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/.svg$
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-titles',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              elements: ['h1', 'h2', 'h3']
            }
          },
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'shortnameToUnicode',
              ascii: false
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            }
          }
        ]
      }
    }
  ]
}