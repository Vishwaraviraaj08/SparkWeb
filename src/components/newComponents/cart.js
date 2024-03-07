import React from 'react'
import productInfo from '../../data/productInfo'


export default function Cart() {
    return (<>

        <style>
            {`
                    @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap");
@font-face {
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v54/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format("woff2");
}
.material-icons-outlined {
  font-family: "Material Icons Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}
* ::before,
* ::after {
  box-sizing: border-box;
}

body {
  font-family: "Jost", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #34302d;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: #86c5da;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 360px;
}
@media (max-width: 767px) {
  body {
    align-items: baseline;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  body {
    align-items: baseline;
  }
}

.cart_wrapper {
  max-width: 1200px;
  width: 100%;
  max-height: 800px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.4);
  margin: 30px;
  overflow: hidden;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper {
    max-height: 1000px;
  }
}
@media (max-width: 767px) {
  .cart_wrapper {
    max-height: unset;
    max-width: 100%;
    margin: 15px;
  }
}
.cart_wrapper .cart_lists {
  background-color: #ecf0f1;
  padding: 30px;
  width: calc(100% - 330px);
  flex: 0 0 calc(100% - 330px);
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_lists {
    width: 100%;
    flex: 0 0 100%;
  }
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists {
    width: 100%;
    flex: 0 0 100%;
    padding: 20px;
  }
}
.cart_wrapper .cart_lists .cart_title {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  height: 50px;
}
.cart_wrapper .cart_lists .cart_title span {
  margin-right: 8px;
  padding-right: 8px;
  line-height: 18px;
  border-right: solid 2px #ddd;
}
.cart_wrapper .cart_lists .cart_list_wrap {
  padding: 25px 40px;
  overflow: hidden;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap {
    padding-left: 0px;
    padding-right: 0px;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive {
  overflow-x: auto;
  overflow-y: auto;
  max-height: 380px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive {
    max-height: 380px;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive::-webkit-scrollbar-track {
  background-color: #eee;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item {
  display: grid;
  grid-template-columns: 80px 3fr 1fr 1fr 120px 50px;
  margin-bottom: 15px;
  transition: all 0.3s linear;
  position: relative;
  transform: scale(0.995);
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(1) {
  animation: listshow linear;
  animation-duration: 820ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(2) {
  animation: listshow linear;
  animation-duration: 640ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(3) {
  animation: listshow linear;
  animation-duration: 460ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(4) {
  animation: listshow linear;
  animation-duration: 280ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(5) {
  animation: listshow linear;
  animation-duration: 100ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(6) {
  animation: listshow linear;
  animation-duration: -80ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(7) {
  animation: listshow linear;
  animation-duration: -260ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(8) {
  animation: listshow linear;
  animation-duration: -440ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(9) {
  animation: listshow linear;
  animation-duration: -620ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(10) {
  animation: listshow linear;
  animation-duration: -800ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(11) {
  animation: listshow linear;
  animation-duration: -980ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(12) {
  animation: listshow linear;
  animation-duration: -1160ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(13) {
  animation: listshow linear;
  animation-duration: -1340ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(14) {
  animation: listshow linear;
  animation-duration: -1520ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(15) {
  animation: listshow linear;
  animation-duration: -1700ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(16) {
  animation: listshow linear;
  animation-duration: -1880ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(17) {
  animation: listshow linear;
  animation-duration: -2060ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(18) {
  animation: listshow linear;
  animation-duration: -2240ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(19) {
  animation: listshow linear;
  animation-duration: -2420ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(20) {
  animation: listshow linear;
  animation-duration: -2600ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(21) {
  animation: listshow linear;
  animation-duration: -2780ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(22) {
  animation: listshow linear;
  animation-duration: -2960ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(23) {
  animation: listshow linear;
  animation-duration: -3140ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(24) {
  animation: listshow linear;
  animation-duration: -3320ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(25) {
  animation: listshow linear;
  animation-duration: -3500ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(26) {
  animation: listshow linear;
  animation-duration: -3680ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(27) {
  animation: listshow linear;
  animation-duration: -3860ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(28) {
  animation: listshow linear;
  animation-duration: -4040ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(29) {
  animation: listshow linear;
  animation-duration: -4220ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(30) {
  animation: listshow linear;
  animation-duration: -4400ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(31) {
  animation: listshow linear;
  animation-duration: -4580ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(32) {
  animation: listshow linear;
  animation-duration: -4760ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(33) {
  animation: listshow linear;
  animation-duration: -4940ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(34) {
  animation: listshow linear;
  animation-duration: -5120ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(35) {
  animation: listshow linear;
  animation-duration: -5300ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(36) {
  animation: listshow linear;
  animation-duration: -5480ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(37) {
  animation: listshow linear;
  animation-duration: -5660ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(38) {
  animation: listshow linear;
  animation-duration: -5840ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(39) {
  animation: listshow linear;
  animation-duration: -6020ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(40) {
  animation: listshow linear;
  animation-duration: -6200ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(41) {
  animation: listshow linear;
  animation-duration: -6380ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(42) {
  animation: listshow linear;
  animation-duration: -6560ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(43) {
  animation: listshow linear;
  animation-duration: -6740ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(44) {
  animation: listshow linear;
  animation-duration: -6920ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(45) {
  animation: listshow linear;
  animation-duration: -7100ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(46) {
  animation: listshow linear;
  animation-duration: -7280ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(47) {
  animation: listshow linear;
  animation-duration: -7460ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(48) {
  animation: listshow linear;
  animation-duration: -7640ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(49) {
  animation: listshow linear;
  animation-duration: -7820ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:nth-last-child(50) {
  animation: listshow linear;
  animation-duration: -8000ms;
  transform-origin: top;
}
@keyframes listshow {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item {
    grid-template-columns: 80px auto 80px auto;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 2px;
  background-color: #d9d9d9;
  width: 0px;
  margin: auto;
}
@keyframes line {
  0% {
    width: 0px;
  }
  100% {
    width: calc(100% - 50px);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:hover {
  transform: scale(1);
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item:hover::after {
  width: calc(100% - 50px);
  animation: line 0.5s linear;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item {
  padding: 10px;
  background-color: #e5e9ea;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  color: #666;
  transition: all 0.3s linear;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item {
    padding: 5px;
  }
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_img {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_img img {
  height: 60px;
  width: 60px;
  overflow: hidden;
  border-radius: 100px;
  max-width: 100%;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_name {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 5;
    width: 100%;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_name .main {
  font-size: 16px;
  font-weight: 400;
  color: #666;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_name .sub {
  font-size: 12px;
  color: #666;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_qty select {
  height: 30px;
  background-color: transparent;
  border-color: transparent;
  border-width: 2px;
  outline: none;
  color: #666;
  font-weight: 400;
  font-size: 16px;
  transition: all 0.3s linear;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_qty select:focus {
  background-color: #e2e2e2;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_qty select:hover {
  border-bottom: solid 2px #e2e2e2;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_price label {
  margin: auto;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_remove {
  background-color: transparent;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_remove {
    position: absolute;
    right: 0px;
    top: 0px;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_remove span {
  font-size: 18px;
  opacity: 0.6;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.cart_wrapper .cart_lists .cart_list_wrap .cart_responsive .tr_item .td_item.item_remove span:hover {
  opacity: 1;
  transform: scale(1.1);
}
.cart_wrapper .cart_lists .cart_list_wrap .footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 5px;
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .back_cart {
  width: 50%;
  flex: 0 0 50%;
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .back_cart a {
  color: #303030;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s;
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .back_cart a:hover {
  color: #111;
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .back_cart a:hover span {
  animation: arrow 1.5s infinite ease;
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .back_cart a span {
  vertical-align: sub;
  font-size: 18px;
  margin-right: 5px;
}
@keyframes arrow {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0px);
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .subtotal {
  width: calc(50% - 80px);
  flex: 0 0 calc(50% - 50px);
  text-align: right;
  font-size: 16px;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_lists .cart_list_wrap .footer .subtotal {
    width: 50%;
    flex: 0 0 50%;
  }
}
.cart_wrapper .cart_lists .cart_list_wrap .footer .subtotal label {
  margin-right: 15px;
}
.cart_wrapper .cart_details {
  background: linear-gradient(45deg, #303030, #4b4643);
  padding: 30px 40px;
  width: 330px;
  flex: 0 0 330px;
  box-shadow: -8px 0px 32px rgba(0, 0, 0, 0.36);
  position: relative;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details {
    width: 100%;
    flex: 0 0 100%;
  }
}
@media (max-width: 767px) {
  .cart_wrapper .cart_details {
    width: 100%;
    flex: 0 0 100%;
    padding: 30px;
  }
}
.cart_wrapper .cart_details .cart_title {
  font-size: 22px;
  color: #f1c40f;
  font-weight: 400;
  margin-bottom: 60px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details .cart_title {
    margin-bottom: 40px;
  }
}
.cart_wrapper .cart_details .form_row {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details .form_row {
    margin-bottom: 40px;
  }
}
.cart_wrapper .cart_details .form_row .form_group {
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  margin-bottom: 35px;
  padding: 0px 10px;
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details .form_row .form_group:nth-child(2) {
    width: 50%;
  }
  .cart_wrapper .cart_details .form_row .form_group:nth-child(3) {
    width: 30% !important;
    flex: 0 0 30% !important;
  }
  .cart_wrapper .cart_details .form_row .form_group:nth-child(4) {
    width: 20% !important;
    flex: 0 0 20% !important;
  }
}
.cart_wrapper .cart_details .form_row .form_group.w_75 {
  width: 65%;
  flex: 0 0 65%;
}
.cart_wrapper .cart_details .form_row .form_group.w_25 {
  width: 35%;
  flex: 0 0 35%;
}
.cart_wrapper .cart_details .form_row .form_group .input_label {
  color: #f3f3f3;
  font-weight: 300;
  font-size: 16pxx;
  width: 100%;
  flex: 0 0 100%;
  letter-spacing: 0.5px;
}
.cart_wrapper .cart_details .form_row .form_group .input {
  width: 100%;
  flex: 0 0 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #eee;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  border-bottom: solid 2px #999;
  height: 32px;
  transition: all 0.3s linear;
}
.cart_wrapper .cart_details .form_row .form_group .input::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.1);
  transition: all 0.2s linear;
}
.cart_wrapper .cart_details .form_row .form_group .input:focus::placeholder {
  opacity: 0;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type {
  justify-content: space-between;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details .form_row .form_group.cart_type {
    justify-content: left;
  }
}
.cart_wrapper .cart_details .form_row .form_group.cart_type .type {
  width: calc(100% / 3 - 15px);
  padding: 0px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cart_wrapper .cart_details .form_row .form_group.cart_type .type {
    width: 75px;
  }
}
.cart_wrapper .cart_details .form_row .form_group.cart_type .type:hover svg {
  fill: #bbb;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type .type svg {
  width: 42px;
  fill: #7f7a76;
  transition: all 0.3s linear;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type .type.paypal svg {
  width: 62px;
  margin-top: -10px;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type input {
  display: none;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type input#master:checked ~ .master svg {
  fill: #f4f4f4;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type input#visa:checked ~ .visa svg {
  fill: #f4f4f4;
}
.cart_wrapper .cart_details .form_row .form_group.cart_type input#paypal:checked ~ .paypal svg {
  fill: #f4f4f4;
}
.cart_wrapper .cart_details .form_row .btn {
  width: calc(100%);
  height: 65px;
  margin: 0px -40px;
  background-color: #f1c40f;
  border: none;
  color: #333;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  bottom: 0px;
  transition: all 0.3s linear;
}
@media (max-width: 767px) {
  .cart_wrapper .cart_details .form_row .btn {
    position: static;
    margin: auto;
  }
}
.cart_wrapper .cart_details .form_row .btn:hover {
  background-color: #dfb50d;
}
.cart_wrapper .cart_details .form_row .btn:active {
  box-shadow: inset 0 0 28px 0px rgba(0, 0, 0, 0.3);
}
                
                `}
        </style>
        <section className="cart_wrapper" style={{marginTop:'150px'}}>
            <div className="cart_lists">
                <div className="cart_title">
                    <span className="material-icons-outlined">local_mall</span>
                    Your Shopping Cart
                </div>
                <div className="cart_list_wrap">
                    <div className="cart_responsive">


                        {productInfo.map((item, index) => {
                            return(<>
                        <div className="tr_item">
                            <div className="td_item item_img">
                                <img src={item.imageLink}/>
                            </div>
                            <div className="td_item item_name">
                                <label className="main">{item.productName}</label>
                                <label className="sub">{item.shortDescription.substring(0,50)}</label>
                            </div>
                            <div className="td_item item_color">
                                <label></label>
                            </div>
                            <div className="td_item item_qty">
                                <select>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div className="td_item item_price">
                                <label>&#8377; {item.price}</label>
                            </div>
                            <div className="td_item item_remove">
                                <span className="material-icons-outlined">close</span>
                            </div>
                        </div>
                            </>)
                        })


                        }


                    </div>
                    <div className="footer">
                        <div className="back_cart">
                            <a href="/">
                                <span className="material-icons-outlined">west</span>
                                Back to Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart_details">
                <div className="cart_title">Cart Details</div>
                <div className="subtotal text-warning ">
                    <h4 style={{color:"#ffffff"}}>Subtotal :    &#8377; {222}</h4>
                    <h4 style={{color:"#ffffff"}}>No of Items :   {222}</h4>

                </div>
                <div className="form_row">

                    <button className="btn">Checkout</button>
                </div>
            </div>
        </section>

    </>)
}
