
import React from 'react'
import webframeworks from '@site/src/data/frameworks/webframeworks.json'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl';


export type Webframeworks ={
  name: string,
  logo:  HTMLImageElement,
  shortDescription: string,
  longDescription: JSX.Element,
  frameworkType: string,
  href: URL
}

export default function WebFrameworks () {
  return(
    <>
    <div>
      <div className="row is-multiline">
        {webframeworks.map((webframeworks) => (
          <div key={webframeworks.name} className="col col--3">
            <Link className="card" to={webframeworks.href}>
              <div className="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <img src={webframeworks.logo} width="20" alt={webframeworks.name} style={{ display: 'block', maxHeight: 20 }} />
                <p>{webframeworks.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
