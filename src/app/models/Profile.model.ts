export interface Profile {
    firstName? : string;
    lastName? : string;
    poste? : string;
    contrat? : string;
    city? : string;
    about?: string;
    technos? : string[];
    email?: string;
    phone?: string;
    cv_url?: string;
    current_missions?: string[];
    history_missions?: Mission[];
    articles? : Article[];
    url_image?: string;
    solde_conge_cp:number;
    solde_conge_rtts:number;
    solde_conge_rtte:number;
}

export interface Mission {
    projet? : string;
    client? : string;
    date? : string;
    description? : string;
}

export interface Article {
    title? : string;
    under_title? : string;
    description? : string;
    image? : string;
}