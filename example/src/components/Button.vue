<template>
  <button class="c-button">
    <div class="c-button__hover" />
    <div class="c-button__content">
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  name: 'Button'
}
</script>
<style>
.c-button {
  padding: 12px 16px;
  display: inline-block;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 8px;
  appearance: none;
  position: relative;
  outline: none;
  font-size: 14px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
}

.c-button.v--success {
  background-color: #28a745;
  color: #fff;
}

.c-button.v--info {
  background-color: #17a2b8;
  color: #fff;
}

.c-button.v--warning {
  background-color: #ffc107;
  color: #fff;
}

.c-button.v--error {
  background-color: #dc3545;
  color: #fff;
}

.c-button.v--default {
  background-color: #343a40;
  color: #fff;
}

.c-button--sprawled {
  min-width: 160px;
  padding: 12px 48px;
}
.c-button__hover {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(115, 115, 115, 0.2);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.1s all ease;
}
.c-button:hover > .c-button__hover {
  opacity: 1;
}
.c-button__content {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
}
</style>
