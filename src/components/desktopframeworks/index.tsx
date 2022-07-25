
import React from 'react'
import desktopframeworks from '@site/src/data/frameworks/desktopframeworks.json'
import Link from '@docusaurus/Link'

export type DesktopFrameworks ={
  name: string,
  logo:  URL,
  shortDescription: string,
  longDescription: JSX.Element,
  frameworkType: string,
  href: URL
}

export default function DesktopFrameworks () {
  return(
    <>
    <div>
      <div className="row is-multiline">
        {desktopframeworks.map((desktopframeworks) => (
          <div key={desktopframeworks.name} className="col col--3">
            <Link className="card" to={desktopframeworks.href}>
              <div className="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <img src={desktopframeworks.logo} width="20" alt={desktopframeworks.name} style={{ display: 'block', maxHeight: 20 }} />
                <p>{desktopframeworks.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
