import { Domaine } from './Domaine';

export interface Expert{
    id?: number;
    name?: string ;
    prenom?: string;
    mail?: string; 
    tel1?: number;
    tel2?: number;  
    domain?: Domaine;
    note ?: number[];
    prix ?: number;
    heure?: string;
    pays ?: string;
    region?: string;
    ville?: string;
    quartier?: string;
    img?: string;
    description ?: string; 
}