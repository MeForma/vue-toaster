<template>
  <div class="hello">
    <Spacing bottom="4">
      <h1>{{ msg }}</h1>
      <p>Click a button to show a Toast</p>
    </Spacing>
    <div class="c-grid">
      <Button class="v--default" @click="toast">Default</Button>
      <Button class="v--success" @click="toast('success')">Success</Button>
      <Button class="v--info" @click="toast('info')">Info</Button>
      <Button class="v--warning" @click="toast('warning')">Warning</Button>
      <Button class="v--error" @click="toast('error')">Error</Button>
    </div>
    <Spacing :vertical="4">
      <h2>Do your changes</h2>
      <Spacing :vertical="2">
        <div class="c-two-columns">
          <div>
            <fieldset>
              <label class="c-label" for="message">Message</label>
              <input id="message" v-model="message" type="text" />
            </fieldset>
            <fieldset>
              <label class="c-label">Position</label>
              <label
                v-for="position in positions"
                :key="position.key"
                class="c-label"
              >
                <input
                  name="position"
                  type="radio"
                  :value="position.value"
                  v-model="options.position"
                  @change="toast"
                />{{ position.name }}
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                Duration: {{ options.duration
                }}{{ options.duration ? 'ms' : '' }}
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                v-model="options.duration"
                :disabled="options.duration === false"
              />
              <label class="c-label">
                <input type="checkbox" @change="changeDuration" />
                Disable duration
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="options.dismissible = $event.target.checked"
                />
                Dismissible on click
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  @change="options.queue = $event.target.checked"
                />
                Enqueue
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label"> Max Toasts</label>
              <input
                type="number"
                v-model="options.maxToasts"
                placeholder="false"
              />
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="options.pauseOnHover = $event.target.checked"
                />
                Pause on hover
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="options.useDefaultCss = $event.target.checked"
                />
                Use default CSS
              </label>
            </fieldset>
          </div>
          <div class="c-column-right">
            <div class="c-code">
              <code>this.$toast(</code>
              <Spacing left="2">
                <code class="c-code--string">"{{ message }}"</code>
                <code v-if="hasOptions">,</code>
              </Spacing>
              <Spacing v-if="hasOptions" left="2">
                <code>{</code>
                <Spacing left="4">
                  <span class="c-code--object-line" v-if="options.type">
                    <code>type:</code>
                    <code class="c-code--string">{{ options.type }}</code>
                  </span>
                  <span class="c-code--object-line" v-if="options.position">
                    <code>position:</code>
                    <code class="c-code--string">"{{ options.position }}"</code>
                  </span>
                  <span
                    class="c-code--object-line"
                    v-if="options.duration !== 4000"
                  >
                    <code>duration:</code>
                    <code class="c-code--number">{{ options.duration }}</code>
                  </span>

                  <span
                    class="c-code--object-line"
                    v-if="options.dismissible === false"
                  >
                    <code>dismissible:</code>
                    <code class="c-code--number">{{
                      options.dismissible
                    }}</code>
                  </span>

                  <span class="c-code--object-line" v-if="options.queue">
                    <code>queue:</code>
                    <code class="c-code--number">{{ options.queue }}</code>
                  </span>

                  <span
                    class="c-code--object-line"
                    v-if="options.maxToasts || options.maxToasts === 0"
                  >
                    <code>max:</code>
                    <code class="c-code--number">{{ options.maxToasts }}</code>
                  </span>

                  <span
                    class="c-code--object-line"
                    v-if="options.pauseOnHover === false"
                  >
                    <code>pauseOnHover:</code>
                    <code class="c-code--number">{{
                      options.pauseOnHover
                    }}</code>
                  </span>

                  <span
                    class="c-code--object-line"
                    v-if="options.useDefaultCss === false"
                  >
                    <code>useDefaultCss:</code>
                    <code class="c-code--number">{{
                      options.useDefaultCss
                    }}</code>
                  </span>
                </Spacing>
                <code>}</code>
              </Spacing>
              <code>)</code>
            </div>
            <Button @click="toast" class="v--default">Show it</Button>
          </div>
        </div>
      </Spacing>
    </Spacing>
  </div>
</template>

<script>
import Button from './Button'
import Spacing from './Spacing.vue'
import { Positions } from '@meforma/vue-toaster'

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: `Hi! I'm a Toast`,
      options: {
        duration: 4000
      }
    }
  },
  components: {
    Button,
    Spacing
  },
  props: {
    msg: String
  },
  computed: {
    positions() {
      return Object.keys(Positions).map((key) => {
        return {
          key,
          value: Positions[key],
          name: Positions[key].replace(/-/, ' ')
        }
      })
    },
    hasOptions() {
      return (
        this.options &&
        (Object.keys(this.options).length > 1 || this.options.duration !== 4000)
      )
    }
  },
  methods: {
    toast(type = 'default', dismissible = true) {
      const options = {
        dismissible,
        onClick: this.onClick
      }
      typeof type === 'string' && (options.type = type)

      typeof this.options.maxToasts === 'string' &&
        (this.options.maxToasts = parseInt(this.options.maxToasts))

      this.$toast.show(this.message, {
        ...options,
        ...this.options
      })
    },
    changeDuration(e) {
      this.options.duration = !e.target.checked ? 4000 : false
    },
    onClick(e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.c-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

input {
  border: 1px solid transparent;
  height: 40px;
  padding: 10px 16px;
  outline: none;
  border-radius: 8px;
  background-color: #f3f3f4;
  width: 100%;
}

input[type='range'] {
  padding: 0;
}
input[type='radio'],
input[type='checkbox'] {
  height: 22px;
  width: 22px;
  margin-right: 8px;
  cursor: pointer;
}

.c-two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  max-width: 840px;
  margin: 0 auto;
}

fieldset {
  text-align: left;
  border: none;
  padding: 0;
}

fieldset:not(:last-child) {
  margin-bottom: 20px;
}

.c-label {
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

.c-code {
  background-color: #252526;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  padding: 16px;
  text-align: left;
}

.c-code--string {
  color: #ce9178;
}

.c-code--object-line {
  display: flex;
}
.c-code--object-line:not(:last-child)::after {
  content: ',';
  font-family: monospace;
  display: inline-block;
}
.c-code--object-line > code:last-child {
  margin-left: 8px;
}

.c-code--number {
  color: #b5cea8;
}

.c-column-right {
  display: grid;
  grid-gap: 16px;
}
</style>
