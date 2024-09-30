import React from 'react'
import '../App.css';

export default function Mininav() {
  // ไว้ดึงประเภทข้อมูลมาวนลูป
  return (
    <>
      <ul class="nav nav-pills border-bottom " style={{fontSize:'18px'}}>
        <li class="nav-item">
          <a class="nav-link hover-text-yellow" aria-current="page" href="/foryou">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hover-text-yellow" href="/following">Following</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link hover-text-yellow" href="/feed">Web dev</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link hover-text-yellow" href="###">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hover-text-yellow" href="###">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled hover-text-yellow" href="###" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </>
  )
}
