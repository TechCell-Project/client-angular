export class Timestamp {
  createdAt: Date | string;
  updatedAt: Date | string;

  constructor() {
    this.createdAt = '';
    this.updatedAt = '';
  }
}

export class Paging {
  page: number;
  pageIndex: number;

  constructor() {
    this.page = 1;
    this.pageIndex = 12;
  }
}

export class PagingResponse<T = unknown> {
  page: number | null = null;
  pageSize: number | null = null;
  totalPage: number | null = null;
  totalRecord: number | null = null;
  data: Array<T> = new Array<T>();
}

export class Image {
  publicId: string | null = null;
  url: string | null = null;
  isThumbnail?: boolean = false;
}
