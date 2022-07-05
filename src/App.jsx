import techniques from './techniques-index.js'
import CreateTableRow from './createTableRow';
import './App.css'

function App() {
  return (
    <main>

      <div><div>
        <table>

          <colgroup>
            <col></col>
            <col></col>
          </colgroup>

          <thead>
            <tr>
              <th>Technique</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <CreateTableRow data={techniques.UserAgent()} />
            <CreateTableRow data={techniques.Webdriver()} />
            <CreateTableRow data={techniques.TouchDevice()} />
            <CreateTableRow data={techniques.Timezone()} />
            <CreateTableRow data={techniques.TimeOfVisit()} />
            <CreateTableRow data={techniques.ColorDepth()} />
            <CreateTableRow data={techniques.CookiesEnabled()} />
            <CreateTableRow data={techniques.CSSMediaFeatures()} />
            <CreateTableRow data={techniques.DeviceMemory()} />
            <CreateTableRow data={techniques.DoNotTrack()} />
            <CreateTableRow data={techniques.Fullscreen()} />
            <CreateTableRow data={techniques.HardwareConcurrency()} />
            <CreateTableRow data={techniques.HeapMemoryLimit()} />
            <CreateTableRow data={techniques.Language()} />
            <CreateTableRow data={techniques.MobileDevice()} />
            <CreateTableRow data={techniques.NetworkInfo()} />
            <CreateTableRow data={techniques.PageReloaded()} />
            <CreateTableRow data={techniques.Referrer()} />
            <CreateTableRow data={techniques.RequestResponseTime()} />
            <CreateTableRow data={techniques.ScreenOrientation()} />
            <CreateTableRow data={techniques.SessionHistory()} />
            <CreateTableRow data={techniques.Storage()} />

            <CreateTableRow data={techniques.Renderer()} />
            <CreateTableRow data={techniques.DomRect()} />
            <CreateTableRow data={techniques.WebGL()} />
            <CreateTableRow data={techniques.Canvas()} />
            <CreateTableRow data={techniques.AudioContext()} />
            <CreateTableRow data={techniques.ZoomLevel()} />
            <CreateTableRow data={techniques.Viewport()} />
            <CreateTableRow data={techniques.DevToolsOpen()} />
            <CreateTableRow data={techniques.Clicks()} />
            <CreateTableRow data={techniques.KeyPresses()} />
            <CreateTableRow data={techniques.PointerMovement()} />
            <CreateTableRow data={techniques.MouseWheel()} />
            <CreateTableRow data={techniques.SessionDuration()} />
            <CreateTableRow data={techniques.TabChanges()} />
            <CreateTableRow data={techniques.BatteryLevel()} />
            <CreateTableRow data={techniques.SpeechVoices()} />
            <CreateTableRow data={techniques.LoggedAccounts()} />
            <CreateTableRow data={techniques.AdBlocker()} />
            <CreateTableRow data={techniques.PageLoadTime()} />
            <CreateTableRow data={techniques.GeoIP()} />
          </tbody>
        </table>
      </div></div>
    </main>
  )
}

export default App
