
import React from 'react'
import mobileframeworks from '@site/src/data/frameworks/mobileframeworks.json'
import Link from '@docusaurus/Link'

export type Webframeworks ={
  name: string,
  logo:  URL,
  shortDescription: string,
  longDescription: JSX.Element,
  frameworkType: string,
  href: URL
}

export default function MobileFrameworks () {
  return(
    <>
    <div>
      <div className="row is-multiline">
        {mobileframeworks.map((mobileframeworks) => (
          <div key={mobileframeworks.name} className="col col--3">
            <Link className="card" to={mobileframeworks.href}>
              <div className="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <img src={mobileframeworks.logo} width="20" alt={mobileframeworks.name} style={{ display: 'block', maxHeight: 20 }} />
                <p>{mobileframeworks.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
