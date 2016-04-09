$(document).foundation()


function scriptCreator() {

  // Defining Variables
  var output = [];
  var vm1;
  var vm2;
  var vm3;
  var vm4;
  var vm5;
  var vm6;
  var vm7;
  var vm8;
  var vm9;
  var vm10;

    // Folders
    var vmFolder = document.getElementById("vmfolder").value;
    var tempFolder = document.getElementById("tempfolder").value;
    var premFolder = document.getElementById("premfolder").value;

    // VM ID
    var vmid1 = document.getElementById("vmid1").value;
    var vmid2 = document.getElementById("vmid2").value;
    var vmid3 = document.getElementById("vmid3").value;
    var vmid4 = document.getElementById("vmid4").value;
    var vmid5 = document.getElementById("vmid5").value;
    var vmid6 = document.getElementById("vmid6").value;
    var vmid7 = document.getElementById("vmid7").value;
    var vmid8 = document.getElementById("vmid8").value;
    var vmid9 = document.getElementById("vmid9").value;
    var vmid10 = document.getElementById("vmid10").value;

    // VM Folder
    var vmFolder1 = document.getElementById("vm1folder").value;
    var vmFolder2 = document.getElementById("vm2folder").value;
    var vmFolder3 = document.getElementById("vm3folder").value;
    var vmFolder4 = document.getElementById("vm4folder").value;
    var vmFolder5 = document.getElementById("vm5folder").value;
    var vmFolder6 = document.getElementById("vm6folder").value;
    var vmFolder7 = document.getElementById("vm7folder").value;
    var vmFolder8 = document.getElementById("vm8folder").value;
    var vmFolder9 = document.getElementById("vm9folder").value;
    var vmFolder10 = document.getElementById("vm10folder").value;

    // VMDK Folder
    var vmdkFolder1 = document.getElementById("vmdk1").value;
    var vmdkFolder2 = document.getElementById("vmdk2").value;
    var vmdkFolder3 = document.getElementById("vmdk3").value;
    var vmdkFolder4 = document.getElementById("vmdk4").value;
    var vmdkFolder5 = document.getElementById("vmdk5").value;
    var vmdkFolder6 = document.getElementById("vmdk6").value;
    var vmdkFolder7 = document.getElementById("vmdk7").value;
    var vmdkFolder8 = document.getElementById("vmdk8").value;
    var vmdkFolder9 = document.getElementById("vmdk9").value;
    var vmdkFolder10 = document.getElementById("vmdk10").value;

    // VMX Folder
    var vmxFolder1 = document.getElementById("vmx1").value;
    var vmxFolder2 = document.getElementById("vmx2").value;
    var vmxFolder3 = document.getElementById("vmx3").value;
    var vmxFolder4 = document.getElementById("vmx4").value;
    var vmxFolder5 = document.getElementById("vmx5").value;
    var vmxFolder6 = document.getElementById("vmx6").value;
    var vmxFolder7 = document.getElementById("vmx7").value;
    var vmxFolder8 = document.getElementById("vmx8").value;
    var vmxFolder9 = document.getElementById("vmx9").value;
    var vmxFolder10 = document.getElementById("vmx10").value;

  // Logic
  if ( (vmFolder.length || tempFolder.length || premFolder.length) !== 0 ) {

    output[0] = "export DS_SOURCE=\"/vmfs/volumes/" + vmFolder + "\"";
    output[1] = "export DS_DEST=\"/vmfs/volumes/" + tempFolder + "/" + tempFolder + "/\"";
    // Output PremFolder

    // Checks VM 1
    if ( (vmid1.length || vmFolder1.length || vmdkFolder1.length || vmxFolder1.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid1;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder1;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid1 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder1 + "/" + vmdkFolder1 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid1;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder1 + "/" + vmxFolder1 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder1 + "/" + vmxFolder1 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm1 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm1 = 1;
    }


    // Checks VM 2
    if ( (vmid2.length || vmFolder2.length || vmdkFolder2.length || vmxFolder2.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid2;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder2;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid2 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder2 + "/" + vmdkFolder2 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid2;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder2 + "/" + vmxFolder2 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder2 + "/" + vmxFolder2 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm2 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm2 = 2;
    }

    // Checks VM 3
    if ( (vmid3.length || vmFolder3.length || vmdkFolder3.length || vmxFolder3.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid3;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder3;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid3 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder3 + "/" + vmdkFolder3 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid3;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder3 + "/" + vmxFolder3 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder3 + "/" + vmxFolder3 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm3 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm3 = 3;
    }


    // Checks VM 4
    if ( (vmid4.length || vmFolder4.length || vmdkFolder4.length || vmxFolder4.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid4;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder4;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid4 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder4 + "/" + vmdkFolder4 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid4;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder4 + "/" + vmxFolder4 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder4 + "/" + vmxFolder4 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm4 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm4 = 4;
    }


    // Checks VM 5
    if ( (vmid5.length || vmFolder5.length || vmdkFolder5.length || vmxFolder5.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid5;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder5;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid5 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder5 + "/" + vmdkFolder5 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid5;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder5 + "/" + vmxFolder5 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder5 + "/" + vmxFolder5 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm5 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm5 = 5;
    }


    // Checks VM 6
    if ( (vmid6.length || vmFolder6.length || vmdkFolder6.length || vmxFolder6.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid6;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder6;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid6 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder6 + "/" + vmdkFolder6 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid6;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder6 + "/" + vmxFolder6 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder6 + "/" + vmxFolder6 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm6 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm6 = 6;
    }


    // Checks VM 7
    if ( (vmid7.length || vmFolder7.length || vmdkFolder7.length || vmxFolder7.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid7;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder7;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid7 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder7 + "/" + vmdkFolder7 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid7;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder7 + "/" + vmxFolder7 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder7 + "/" + vmxFolder7 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm7 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm7 = 7;
    }


    // Checks VM 8
    if ( (vmid8.length || vmFolder8.length || vmdkFolder8.length || vmxFolder8.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid8;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder8;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid8 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder8 + "/" + vmdkFolder8 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid8;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder8 + "/" + vmxFolder8 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder8 + "/" + vmxFolder8 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm8 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm8 = 8;
    }


    // Checks VM 9
    if ( (vmid9.length || vmFolder9.length || vmdkFolder9.length || vmxFolder9.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid9;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder9;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid9 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder9 + "/" + vmdkFolder9 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid9;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder9 + "/" + vmxFolder9 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder9 + "/" + vmxFolder9 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm9 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm9 = 9;
    }


    // Checks VM 10
    if ( (vmid10.length || vmFolder10.length || vmdkFolder10.length || vmxFolder10.length) !== 0 ) {
      output[2] = "vim-cmd vmsvc/snapshot.removeall " + vmid10;
      output[3] = "mkdir \"$DS_DEST\"/`date +%b%d%Y`" + vmFolder10;
      output[4] = "vim-cmd vmsvc/snapshot.create " + vmid10 + " BackupINPROG";
      output[5] = "vmkfstools -i \"$DS_SOURCE\"/" + vmdkFolder10 + "/" + vmdkFolder10 + ".vmdk \"$DS_DEST\"/`date +%b%d%Y`";
      output[6] = "vim-cmd vmsvc/snapshot.removeall " + vmid10;
      output[7] = "cp \"$DS_SOURCE\"/" + vmxFolder10 + "/" + vmxFolder10 + ".vmx \"$DS_DEST\"/`date +%b%d%Y`/" + vmxFolder10 + "/" + vmxFolder10 + ".vmx\"";
      output[8] = "export DS_DISKMOVE=\"/vmfs/volumes/" + premFolder + "/" + premFolder + "/\"";

      vm10 = output[0] + "\n" +
        output[1] + "\n" +
        "wait 5 \n" +
        "mkdir \"$DS_DEST\"`date +%b%d%Y` \n" +
        output[2] + "\n" +
        "wait 5 \n" +
        output[3] + "\n" +
        "wait 5 \n" +
        output[4] + "\n" +
        "wait 5 \n" +
        output[5] + "\n" +
        "wait 5 \n" +
        output[6] + "\n" +
        "wait 5 \n" +
        output[7] + "\n" +
        "wait 5 \n" +
        output[8] + "\n" +
        "mv \"$DS_DEST\"/* \"$DS_DISKMOVE\"/";
    } else {
      vm10 = 10;
    }


    // Display on Web Page
    document.getElementById("output").value = vm1 + "\n" + vm2 + "\n" + vm3 + "\n" + vm4 + "\n" + vm5 + "\n" + vm6 + "\n" + vm7 + "\n" + vm8 + "\n" + vm9 + "\n" + vm10;

  } else {
    alert("Check and make sure you chose a VM Folder Location, TEMP Folder Location, and PREM Folder Location");
  }

}
