'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('cropperjs');

require('cropperjs/dist/cropper.css');

var CropperJS = (0, _createReactClass2['default'])({

   propTypes: {
      // react cropper options
      crossOrigin: _propTypes2['default'].string,
      src: _propTypes2['default'].string,
      alt: _propTypes2['default'].string,
      style: _propTypes2['default'].object,

      // cropper options
      aspectRatio: _propTypes2['default'].number,
      crop: _propTypes2['default'].func,
      preview: _propTypes2['default'].string,
      strict: _propTypes2['default'].bool,
      responsive: _propTypes2['default'].bool,
      checkImageOrigin: _propTypes2['default'].bool,
      background: _propTypes2['default'].bool,
      modal: _propTypes2['default'].bool,
      guides: _propTypes2['default'].bool,
      highlight: _propTypes2['default'].bool,
      autoCrop: _propTypes2['default'].bool,
      autoCropArea: _propTypes2['default'].number,
      dragCrop: _propTypes2['default'].bool,
      movable: _propTypes2['default'].bool,
      cropBoxMovable: _propTypes2['default'].bool,
      cropBoxResizable: _propTypes2['default'].bool,
      doubleClickToggle: _propTypes2['default'].bool,
      zoomable: _propTypes2['default'].bool,
      mouseWheelZoom: _propTypes2['default'].bool,
      touchDragZoom: _propTypes2['default'].bool,
      rotatable: _propTypes2['default'].bool,
      minContainerWidth: _propTypes2['default'].number,
      minContainerHeight: _propTypes2['default'].number,
      minCanvasWidth: _propTypes2['default'].number,
      minCanvasHeight: _propTypes2['default'].number,
      minCropBoxWidth: _propTypes2['default'].number,
      minCropBoxHeight: _propTypes2['default'].number,

      // cropper callbacks
      build: _propTypes2['default'].func,
      built: _propTypes2['default'].func,
      cropstart: _propTypes2['default'].func,
      cropmove: _propTypes2['default'].func,
      cropend: _propTypes2['default'].func,
      zoom: _propTypes2['default'].func
   },

   getDefaultProps: function getDefaultProps() {
      return {
         src: null
      };
   },

   componentDidMount: function componentDidMount() {
      var options = {};
      for (var prop in this.props) {
         if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
            options[prop] = this.props[prop];
         }
      }
      this.cropper = new _cropperjs2['default'](this.refs.img, options);
   },

   componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
         this.replace(nextProps.src);
      }
      if (nextProps.aspectRatio !== this.props.aspectRatio) {
         this.setAspectRatio(nextProps.aspectRatio);
      }
   },

   componentWillUnmount: function componentWillUnmount() {
      if (this.cropper) {
         // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
         this.cropper.destroy();
         // While we're at it remove our reference to the jQuery instance
         //   delete this.$img;
      }
   },

   move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
   },

   zoom: function zoom(ratio) {
      return this.cropper.zoom(ratio);
   },

   rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
   },

   enable: function enable() {
      return this.cropper.enable();
   },

   disable: function disable() {
      return this.cropper.disable();
   },

   reset: function reset() {
      return this.cropper.reset();
   },

   clear: function clear() {
      return this.cropper.clear();
   },

   replace: function replace(url) {
      return this.cropper.replace(url);
   },

   getData: function getData(rounded) {
      return this.cropper.getData(rounded);
   },

   setData: function setData(data) {
      return this.cropper.setData(data);
   },

   getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
   },

   getImageData: function getImageData() {
      return this.cropper.getImageData();
   },

   getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
   },

   setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
   },

   getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
   },

   setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
   },

   getCroppedCanvas: function getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
   },

   setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
   },

   setDragMode: function setDragMode() {
      return this.cropper.setDragMode();
   },

   render: function render() {
      var imgStyle = {
         opacity: 0
      };
      return _react2['default'].createElement(
         'div',
         {
            style: this.props.style,
            src: null,
            crossOrigin: null,
            alt: null },
         _react2['default'].createElement('img', {
            crossOrigin: this.props.crossOrigin,
            ref: 'img',
            src: this.props.src,
            alt: this.props.alt === undefined ? 'picture' : this.props.alt,
            style: imgStyle })
      );
   }
});

exports['default'] = CropperJS;
module.exports = exports['default'];
