export interface Categories {
    root: string;
    19436e57-515c-474b-83bf-a55d6480ac80: string;
}

export interface ProductGroup {
    key: string;
    label: string;
    value: string;
}

export interface ShankUf829a143e17db493788a27c7fe41c9816SpecificationField35383e50B36345698c0aAa3d4bf06552 {
    unit: string;
    unitValue: string;
}

export interface UnitFieldD48ea611Fe2f47c08744C39daaff47cfSpecificationField28289b2045a842a991b346fa29db37b6 {
    unit: string;
    unitValue: string;
}

export interface Specification {
    isRalColorMatched_::specification-field::_83b247f9-6f53-469f-8575-0d0994b53c11: boolean;
    isRalColorMatched_::specification-field::_acd6d872-7fdb-4f92-804a-58005178a0f3: boolean;
    Shank uf_829a143e-17db-4937-88a2-7c7fe41c9816_::specification-field::_35383e50-b363-4569-8c0a-aa3d4bf06552: ShankUf829a143e17db493788a27c7fe41c9816SpecificationField35383e50B36345698c0aAa3d4bf06552;
    Unit Field_d48ea611-fe2f-47c0-8744-c39daaff47cf_::specification-field::_28289b20-45a8-42a9-91b3-46fa29db37b6: UnitFieldD48ea611Fe2f47c08744C39daaff47cfSpecificationField28289b2045a842a991b346fa29db37b6;
    Color Swatch_d002d623-ea25-4f72-81d5-43ca5a4da474_::specification-field::_acd6d872-7fdb-4f92-804a-58005178a0f3: string;
    Shashank color_faefb7b7-6a73-4258-8bdd-d07966566e29_::specification-field::_83b247f9-6f53-469f-8575-0d0994b53c11: string;
}

export interface ShankUf {
    unit: string;
    unitValue: string;
}

export interface UnitField {
    unit: string;
    unitValue: string;
}

export interface SpecificationGroup {
    Shank uf: ShankUf;
    Unit Field: UnitField;
    Color Swatch: string;
    isRalColorMatched?: boolean;
    Shashank color: string;
}

export interface Image {
    uid: string;
    file_name: string;
    file_path: string;
    object_url: string;
    bucket_name: string;
}

export interface Product {
    id: number;
    category_id: string;
    category_name: string;
    categories: Categories;
    product_group: ProductGroup;
    product_group_id: string;
    product_group_name: string;
    manufacturer: string;
    product_name: string;
    ean: string;
    materials: any[];
    documents: any[];
    specification: Specification;
    building_location_of: string;
    material_current_location: string;
    product_unit: string;
    building_id: string;
    specification_group: SpecificationGroup[];
    available_for_sell: number;
    available_for_sell_until: Date;
    images: Image[];
    total_amount: number;
    amount_unit: string;
    original_price?: number;
    weight_per_unit: string;
}

export interface Meta {
    hasMoreData: boolean;
    cursor: number;
}

export interface Data {
    data: Product[];
    meta: Meta;
}

export interface Response {
    statusCode: number;
    requestId: string;
    status: string;
    logStreamName: string;
    data: Data;
}