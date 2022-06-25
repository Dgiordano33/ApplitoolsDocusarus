
import React from 'react'
import codeless from '@site/src/data/frameworks/codeless.json'
import Link from '@docusaurus/Link'

export type Codeless ={
  name: string,
  logo:  URL,
  shortDescription: string,
  longDescription: JSX.Element,
  frameworkType: string,
  href: URL
}

export default function Codeless () {
  return(
    <>
    <div>
      <div className="row is-multiline">
        {codeless.map((codeless) => (
          <div key={codeless.name} className="col col--3">
            <Link className="card" to={codeless.href}>
              <div className="card__body" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <img src={codeless.logo} width="20" alt={codeless.name} style={{ display: 'block', maxHeight: 20 }} />
                <p>{codeless.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
