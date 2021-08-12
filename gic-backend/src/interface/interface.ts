export interface QueryRequest {
	limit?: string;
	page?: string;
	search?: string;
}

export interface ObjectContact {
	nama: string;
	noHp: string;
	email: string;
	userId?: number;
	role?: string;
}

export interface ObjectUser {
	email: string;
	password: string;
	role?: string;
}

export interface Configdb {
	[index: string]: number | string;
}
