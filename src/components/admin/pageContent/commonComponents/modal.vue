<template>
    <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container" v-bind:style="{width: width + 'px'}">

                <div class="modal-header">
                    <h3>
                        <slot name="header">
                        </slot>
                    </h3>              
                    <button type="button" class="close"  @click="$emit('close')">&times;</button>
                </div>

                <div class="modal-body" v-bind:style="{'height': height+'px', 'overflow-y':height?'auto':'hidden'}">
                    <slot name="body">
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    </slot>
                </div>

            </div>
        </div>
        </div>
    </transition>
</template>

<script>
export default {
    props:[
        'width',
        'height'
    ]
}
</script>

<style scoped>
.modal-wrapper .close{
    top: 0;
    position: absolute;
    right: 0;
    height: 36px;
    width: 36px;
    background-color: #313a46;
    opacity: 1;
    border: 2px solid #ffffff;
    text-shadow: none;
    color: #ffffff;
    border-radius: 50%;
    padding: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header{
    position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #02c0ce;
}

.modal-body {
  margin: 20px 0;
  overflow-x: hidden;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
