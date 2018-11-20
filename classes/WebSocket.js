let instance = null;

module.exports = class WebSockets {
  constructor(io, socket) {
    if (!instance) {
      instance = this;
      this.io = io;
      this.socket = socket;
    }

    this._type = 'WebSockets';
    return instance;
  }

};