class t{constructor(t=0,i=0){this._x=t,this._y=i}get x(){return this._x}set x(t){this._x=t}get y(){return this._y}set y(t){this._y=t}get magnitude(){return Math.sqrt(Math.pow(this._x,2)+Math.pow(this._y,2))}set(t,i){this._x=t,this._y=i}copy(t){this.set(t.x,t.y)}equals(t){return this._x===t.x&&this._y===t.y}clone(){return new t(this._x,this._y)}distance(t){return Math.sqrt(Math.pow(this._x-t.x,2)+Math.pow(this._y-t.y,2))}static add(t,i,s){return t.set(i.x+s.x,i.y+s.y),t}static subtract(t,i,s){return t.set(i.x-s.x,i.y-s.y),t}static unit(t,i){return 0===i.magnitude?t.set(0,0):t.set(i.x/i.magnitude,i.y/i.magnitude),t}static normal(t,i){return t.set(-i.y,i.x),this.unit(t,t)}static scale(t,i,s){return t.set(i.x*s,i.y*s),t}static dot(t,i){return t.x*i.x+t.y*i.y}static cross(t,i){return t.x*i.y-t.y*i.x}static round(t,i){return t.set(Math.round(i.x),Math.round(i.y)),t}}class i{constructor(i,s,e,h){this._position=new t,this._center=new t,this._width=0,this._height=0,this.set(i,s,e,h)}get x(){return this._position.x}set x(t){this._position.set(t,this._position.y)}get y(){return this._position.y}set y(t){this._position.set(this._position.x,t)}get x1(){return this._position.x+this._width}get y1(){return this._position.y+this._height}get position(){return this._position}set position(t){this._position.set(t.x,t.y)}get width(){return this._width}set width(t){this._width=t}get height(){return this._height}set height(t){this._height=t}get center(){return this._center.set(this.x+this.width/2,this.y+this.height/2),this._center}set(t,i,s,e){this._position.set(t,i),this._width=s,this._height=e}equals(t){return this.position.equals(t.position)&&this.width===t.width&&this.height===t.height}copy(t){this.set(t.x,t.y,t.width,t.height)}overlappingRectangle(t){return this.x1>=t.x&&this.x<=t.x1&&this.y1>=t.y&&this.y<=t.y1}}const s=(t,i,s)=>Math.min(s,Math.max(i,t)),e=(t,i)=>Math.round(Math.random()*(i-t))+t,h=(t,i,s=2)=>r(Math.random()*(i-t)+t,s),r=(t,i)=>Math.round(t*Math.pow(10,i))/Math.pow(10,i),n=(t,i,s=1)=>{const e=[];for(let h=t;h<=i;h+=s)e.push(h);return e},o=(t,i,s)=>t>=i&&t<=s;class a{constructor(i=null,s=null){this._degrees=0,this._radians=0,this._direction=new t,i?this.radians=i:s&&(this.degrees=s)}set degrees(t){this._degrees=t,this._radians=t*Math.PI/180,this.updateDirection()}get degrees(){return this._degrees}set radians(t){this._radians=t,this._degrees=180*t/Math.PI,this.updateDirection()}get radians(){return this._radians}get direction(){return this._direction}updateDirection(){this._direction.set(Math.cos(this._radians),Math.sin(this._radians))}}export{i as Rectangle,a as Rotation,t as Vector2,o as between,s as clamp,r as fixedRound,h as randomFloat,e as randomInt,n as range};