// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.0.3
//   protoc               unknown
// source: proto/object.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "topology.object";

export interface TopologyObjectBase {
  id: string;
  abi?: string | undefined;
  bytecode?: Uint8Array | undefined;
  vertices: TopologyObjectBase_Vertex[];
}

/** Supposed to be the RIBLT stuff */
export interface TopologyObjectBase_Vertex {
  hash: string;
  nodeId: string;
  operation: TopologyObjectBase_Vertex_Operation | undefined;
  dependencies: string[];
}

export interface TopologyObjectBase_Vertex_Operation {
  type: string;
  value: string;
}

function createBaseTopologyObjectBase(): TopologyObjectBase {
  return { id: "", abi: undefined, bytecode: undefined, vertices: [] };
}

export const TopologyObjectBase = {
  encode(message: TopologyObjectBase, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.abi !== undefined) {
      writer.uint32(18).string(message.abi);
    }
    if (message.bytecode !== undefined) {
      writer.uint32(26).bytes(message.bytecode);
    }
    for (const v of message.vertices) {
      TopologyObjectBase_Vertex.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TopologyObjectBase {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopologyObjectBase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.abi = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bytecode = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vertices.push(TopologyObjectBase_Vertex.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopologyObjectBase {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      abi: isSet(object.abi) ? globalThis.String(object.abi) : undefined,
      bytecode: isSet(object.bytecode) ? bytesFromBase64(object.bytecode) : undefined,
      vertices: globalThis.Array.isArray(object?.vertices)
        ? object.vertices.map((e: any) => TopologyObjectBase_Vertex.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TopologyObjectBase): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.abi !== undefined) {
      obj.abi = message.abi;
    }
    if (message.bytecode !== undefined) {
      obj.bytecode = base64FromBytes(message.bytecode);
    }
    if (message.vertices?.length) {
      obj.vertices = message.vertices.map((e) => TopologyObjectBase_Vertex.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyObjectBase>, I>>(base?: I): TopologyObjectBase {
    return TopologyObjectBase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyObjectBase>, I>>(object: I): TopologyObjectBase {
    const message = createBaseTopologyObjectBase();
    message.id = object.id ?? "";
    message.abi = object.abi ?? undefined;
    message.bytecode = object.bytecode ?? undefined;
    message.vertices = object.vertices?.map((e) => TopologyObjectBase_Vertex.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTopologyObjectBase_Vertex(): TopologyObjectBase_Vertex {
  return { hash: "", nodeId: "", operation: undefined, dependencies: [] };
}

export const TopologyObjectBase_Vertex = {
  encode(message: TopologyObjectBase_Vertex, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.operation !== undefined) {
      TopologyObjectBase_Vertex_Operation.encode(message.operation, writer.uint32(26).fork()).join();
    }
    for (const v of message.dependencies) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TopologyObjectBase_Vertex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopologyObjectBase_Vertex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation = TopologyObjectBase_Vertex_Operation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dependencies.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopologyObjectBase_Vertex {
    return {
      hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
      nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
      operation: isSet(object.operation) ? TopologyObjectBase_Vertex_Operation.fromJSON(object.operation) : undefined,
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TopologyObjectBase_Vertex): unknown {
    const obj: any = {};
    if (message.hash !== "") {
      obj.hash = message.hash;
    }
    if (message.nodeId !== "") {
      obj.nodeId = message.nodeId;
    }
    if (message.operation !== undefined) {
      obj.operation = TopologyObjectBase_Vertex_Operation.toJSON(message.operation);
    }
    if (message.dependencies?.length) {
      obj.dependencies = message.dependencies;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyObjectBase_Vertex>, I>>(base?: I): TopologyObjectBase_Vertex {
    return TopologyObjectBase_Vertex.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyObjectBase_Vertex>, I>>(object: I): TopologyObjectBase_Vertex {
    const message = createBaseTopologyObjectBase_Vertex();
    message.hash = object.hash ?? "";
    message.nodeId = object.nodeId ?? "";
    message.operation = (object.operation !== undefined && object.operation !== null)
      ? TopologyObjectBase_Vertex_Operation.fromPartial(object.operation)
      : undefined;
    message.dependencies = object.dependencies?.map((e) => e) || [];
    return message;
  },
};

function createBaseTopologyObjectBase_Vertex_Operation(): TopologyObjectBase_Vertex_Operation {
  return { type: "", value: "" };
}

export const TopologyObjectBase_Vertex_Operation = {
  encode(message: TopologyObjectBase_Vertex_Operation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TopologyObjectBase_Vertex_Operation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopologyObjectBase_Vertex_Operation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopologyObjectBase_Vertex_Operation {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TopologyObjectBase_Vertex_Operation): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyObjectBase_Vertex_Operation>, I>>(
    base?: I,
  ): TopologyObjectBase_Vertex_Operation {
    return TopologyObjectBase_Vertex_Operation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyObjectBase_Vertex_Operation>, I>>(
    object: I,
  ): TopologyObjectBase_Vertex_Operation {
    const message = createBaseTopologyObjectBase_Vertex_Operation();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
