import React from 'react'

export default function Card({ item }) {
  return (
    <li className="list-row">
      <div><img
        className="size-10 rounded-box"
        src={item.image}
        alt={item.title} />
      </div>
      <div>
        <div>{item.title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">{item.category}</div>
      </div>
      <p className="list-col-wrap text-xs">{item.description}</p>
      <button className="btn btn-square btn-ghost w-20">${item.price}</button>
    </li>
  )
}
