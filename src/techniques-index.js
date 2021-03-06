import UserAgent from './simple-techniques/UserAgent'
import Webdriver from './simple-techniques/Webdriver'
import TouchDevice from './simple-techniques/TouchDevice'
import Timezone from './simple-techniques/Timezone'
import TimeOfVisit from './simple-techniques/TimeOfVisit'
import Storage from './simple-techniques/Storage'
import SessionHistory from './simple-techniques/SessionHistory'
import ScreenOrientation from './simple-techniques/ScreenOrientation'
import RequestResponseTime from './simple-techniques/RequestResponseTime'
import Referrer from './simple-techniques/Referrer'
import PageReloaded from './simple-techniques/PageReloaded'
import NetworkInfo from './simple-techniques/NetworkInfo'
import MobileDevice from './simple-techniques/MobileDevice'
import Language from './simple-techniques/Language'
import HeapMemoryLimit from './simple-techniques/HeapMemoryLimit'
import HardwareConcurrency from './simple-techniques/HardwareConcurrency'
import Fullscreen from './simple-techniques/Fullscreen'
import DoNotTrack from './simple-techniques/DoNotTrack'
import DeviceMemory from './simple-techniques/DeviceMemory'
import CSSMediaFeatures from './simple-techniques/CSSMediaFeatures'
import CookiesEnabled from './simple-techniques/CookiesEnabled'
import ColorDepth from './simple-techniques/ColorDepth'

import Clicks from './complex-techniques/Clicks'
import KeyPresses from './complex-techniques/KeyPresses'
import PointerMovement from './complex-techniques/PointerMovement'
import MouseWheel from './complex-techniques/MouseWheel'
import SessionDuration from './complex-techniques/SessionDuration'
import TabChanges from './complex-techniques/TabChanges'
import Viewport from './complex-techniques/Viewport'
import ZoomLevel from './complex-techniques/ZoomLevel'
import Canvas from './complex-techniques/Canvas'
import WebGL from './complex-techniques/WebGL'
import DomRect from './complex-techniques/DomRect'
import Renderer from './complex-techniques/Renderer'
import AudioContext from './complex-techniques/AudioContext'
import LoggedAccounts from './complex-techniques/LoggedAccounts'
import DevToolsOpen from './complex-techniques/DevToolsOpen'
import SpeechVoices from './complex-techniques/SpeechVoices'
import BatteryLevel from './complex-techniques/BatteryLevel'
import AdBlocker from './complex-techniques/AdBlocker'
import PageLoadTime from './complex-techniques/PageLoadTime'
import GeoIP from './complex-techniques/GeoIP'

const techniques = {
    UserAgent, Webdriver, TouchDevice, Timezone, TimeOfVisit, Storage, SessionHistory, ScreenOrientation, RequestResponseTime, Referrer, PageReloaded, NetworkInfo, MobileDevice, Language, HeapMemoryLimit, HardwareConcurrency, Fullscreen, DoNotTrack, DeviceMemory, CSSMediaFeatures, CookiesEnabled, ColorDepth,

    Clicks, KeyPresses, PointerMovement, MouseWheel, SessionDuration, TabChanges, Viewport, ZoomLevel, Canvas, WebGL, DomRect, Renderer, AudioContext, LoggedAccounts, DevToolsOpen, SpeechVoices, BatteryLevel, AdBlocker, PageLoadTime, GeoIP
}

export default techniques