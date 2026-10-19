const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.min,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnNthTouchEnd,
		C3.Plugins.System.Cnds.Compare
	];
};
self.C3_JsPropNameTable = [
	{BtnRegadera: 0},
	{BtnRastrillo: 0},
	{BtnFertilizante: 0},
	{Niebla: 0},
	{Brote: 0},
	{toque: 0},
	{TxtInfo: 0},
	{TxtResultado: 0},
	{Fondo: 0},
	{Sombra: 0},
	{Columna: 0},
	{Fila: 0},
	{anchoColumna: 0},
	{altoFila: 0},
	{xIzquierda: 0},
	{yBase: 0},
	{FilaMax: 0},
	{ColumnaMax: 0},
	{PasosRestantes: 0},
	{EstadoJuego: 0},
	{Arrastrando: 0},
	{InicioX: 0},
	{InicioY: 0}
];

self.InstanceType = {
	BtnRegadera: class extends self.ISpriteInstance {},
	BtnRastrillo: class extends self.ISpriteInstance {},
	BtnFertilizante: class extends self.ISpriteInstance {},
	Niebla: class extends self.ISpriteInstance {},
	Brote: class extends self.ISpriteInstance {},
	toque: class extends self.IInstance {},
	TxtInfo: class extends self.ITextInstance {},
	TxtResultado: class extends self.ITextInstance {},
	Fondo: class extends self.ISpriteInstance {},
	Sombra: class extends self.ISpriteInstance {}
}