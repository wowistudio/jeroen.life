// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Experience = {
  image_url?: string
  job_title: string
  company: string
  from: string
  till: string
  location: string
}

type Data = {
  experiences: Experience[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    experiences: [
      {
        image_url: 'https://media.licdn.com/dms/image/C4D0BAQGV3O0pFNZK7Q/company-logo_100_100/0/1643640268203?e=1680739200&v=beta&t=y84XmuF5J94RFERaq19E64DPlywgfKsMi4fsrUtLjh4',
        job_title: 'Full Stack Engineer',
        company: 'Biller',
        from: 'Nov 2021',
        till: 'Present',
        location: 'Amsterdam, North Holland, Netherlands'
      },
      {
        image_url: 'https://media.licdn.com/dms/image/C4D0BAQFZDk7N1t1RGw/company-logo_100_100/0/1646722593858?e=1680739200&v=beta&t=AwuLiTT1kB6LiF0YLqqIzyRI41S8iTvA8Npu-4NFWBg',
        job_title: 'Full Stack Developer',
        company: 'Ikbenfrits',
        from: 'Feb 2018',
        till: 'Nov 2021',
        location: 'Amsterdam Area, Netherlands'
      },
      {
        image_url: undefined,
        job_title: 'Co-Founder',
        company: 'Ams Finest',
        from: 'Jul 2016',
        till: 'Jul 2019',
        location: 'Amsterdam, North Holland, Netherlands'
      },
      {
        image_url: 'https://media.licdn.com/dms/image/C4E0BAQFXKT0GrjS-EA/company-logo_100_100/0/1652893331265?e=1680739200&v=beta&t=3xho6PL-pvUt4f2sxkr5Zzu_8gd7RZV6pOTb0L1-K6M',
        job_title: 'Business Analyst Internship MOBGEN',
        company: 'Accenture the Netherlands',
        from: 'Jan 2017',
        till: 'Jun 2017',
        location: 'Amsterdam Area, Netherlands'
      },
      {
        image_url: 'https://media.licdn.com/dms/image/C560BAQFckBxRnPg53Q/company-logo_100_100/0/1561999707114?e=1680739200&v=beta&t=dRUKGvVVty5rW_9GVcfhs4VQLjtPL8lb3BClOv9Y-DU',
        job_title: 'Nike+ Run Club ',
        company: 'Nike',
        from: 'Jan 2014',
        till: 'Mar 2017',
        location: 'Amsterdam, North Holland, Netherlands'
      },
      {
        image_url: 'https://media.licdn.com/dms/image/C4E0BAQGEeo-FK-U-sQ/company-logo_100_100/0/1652709640743?e=1680739200&v=beta&t=tzzQIA0AhQrMe6cgO3yd8OOtSAG3yNblJc1I-TmL-Pc',
        job_title: 'Director',
        company: 'De Kleine Consultant',
        from: 'Mar 2015',
        till: 'Mar 2016',
        location: 'Amsterdam'
      },
      {
        image_url: undefined,
        job_title: 'Intern',
        company: 'Buzzoek',
        from: 'Feb 2014',
        till: 'Jul 2014',
        location: 'Amsterdam, North Holland, Netherlands'
      }
    ]
  })
}
