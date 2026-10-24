import assert from 'node:assert/strict';
import { nexumGraphId, structuredItem, contentItem } from '@x12i/lscp-nexum';
const tenant = { orgId: 'fixture-org', workspaceId: 'fixture-workspace' };
const intake = { tenant, graphId: nexumGraphId(tenant.orgId, tenant.workspaceId), items: [
  structuredItem('asset-1', 'asset', { name: 'Example laptop' }, 'fixture/assets'),
  contentItem('guide-1', '# Example guide', { title: 'Guide', namespace: 'fixture/docs', permissionsRef: 'fixture-readers' }),
] };
assert.equal(intake.graphId, 'ws:fixture-org/fixture-workspace');
assert.equal(intake.items[0].sourceRef.id, 'asset-1');
assert.equal(intake.items[1].sourceRef.permissionsRef, 'fixture-readers');
assert.equal(intake.items[1].inputKind, 'content');
console.log(intake);
// Host applications can pass these inputs to analyzeWithNexum; this fixture stops before compilation or persistence.
