const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.min,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y
	];
};
self.C3_JsPropNameTable = [
	{BtnRegadera: 0},
	{BtnRastrillo: 0},
	{BtnFertilizante: 0},
	{Sprite3: 0},
	{Brote: 0},
	{ControlTáctil: 0},
	{Columna: 0},
	{Fila: 0},
	{anchoColumna: 0},
	{altoFila: 0},
	{xIzquierda: 0},
	{yBase: 0},
	{FilaMax: 0},
	{ColumnaMax: 0}
];

self.InstanceType = {
	BtnRegadera: class extends self.ISpriteInstance {},
	BtnRastrillo: class extends self.ISpriteInstance {},
	BtnFertilizante: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Brote: class extends self.ISpriteInstance {},
	ControlTáctil: class extends self.IInstance {}
}