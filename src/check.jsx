import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

{/*
//Assigned varibles
let iteration = 0; 
gsap.set(".cards li", { xPercent: 400, opacity: 0, scale: 0 });

const spacing = 0.1;
const snapTime = gsap.utils.snap(spacing);
const cards = gsap.utils.toArray(".cards li");


const animateFunc = (element) => {
    const tl = gsap.timeline();
    tl.fromTo(
      element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        zIndex: 100,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.in",
        immediateRender: false
      }
    ).fromTo(
      element,
      { xPercent: 400 },
      { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
      0
    );
    return tl;
};

const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc), playhead = { offset: 0 }, wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

const scrub = gsap.to(playhead, {
    offset: 0,
    onUpdate() {
      seamlessLoop.time(wrapTime(playhead.offset)); 
    },
    duration: 0.5,
    ease: "power3",
    paused: true
  }),
  trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
      let scroll = self.scroll();
      if (scroll > self.end - 1) {
        wrap(1, 2);
      } else if (scroll < 1 && self.direction < 0) {
        wrap(-1, self.end - 2);
      } else {
        scrub.vars.offset =
          (iteration + self.progress) * seamlessLoop.duration();
        scrub.invalidate().restart(); 
      }
    },
    end: "+=3000",
    pin: ".gallery"
  }
);

const progressToScroll = (progress) => {
    gsap.utils.clamp(
      1,
      trigger.end - 1,
      gsap.utils.wrap(0, 1, progress) * trigger.end
    )
};

const wrap = (iterationDelta, scrollTo) => {
    iteration += iterationDelta;
    trigger.scroll(scrollTo);
    trigger.update(); 
};

ScrollTrigger.addEventListener("scrollEnd", () => {
  scrollToOffset(scrub.vars.offset)
  }
);

function scrollToOffset(offset) {
  let snappedTime = snapTime(offset),
    progress =
      (snappedTime - seamlessLoop.duration() * iteration) /
      seamlessLoop.duration(),
    scroll = progressToScroll(progress);
  if (progress >= 1 || progress < 0) {
    return wrap(Math.floor(progress), scroll);
  }
  trigger.scroll(scroll);
};

document.querySelector(".next").addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing));
document.querySelector(".prev").addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing));

function buildSeamlessLoop(items, spacing, animateFunc) {
  let rawSequence = gsap.timeline({ paused: true }), 
    seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1, 
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      },
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 100);
      }
    }),
    cycleDuration = spacing * items.length,
    dur; 
  items
    .concat(items)
    .concat(items)
    .forEach((item, i) => {
      let anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur || (dur = anim.duration());
    });

  seamlessLoop.fromTo(
    rawSequence,
    {
      time: cycleDuration + dur / 2
    },
    {
      time: "+=" + cycleDuration,
      duration: cycleDuration,
      ease: "none"
    }
  );
  return seamlessLoop;
};

Draggable.create(".drag-proxy", {
  type: "x",
  trigger: ".cards",
  onPress() {
    this.startOffset = scrub.vars.offset;
  },
  onDrag() {
    scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
    scrub.invalidate().restart(); 
  },
  onDragEnd() {
    scrollToOffset(scrub.vars.offset);
  }
});
*/}

const MyComponent = () => {
  return (
    <div class="gallery">
      <ul class="cards">
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </div>
  );
};

export default MyComponent;