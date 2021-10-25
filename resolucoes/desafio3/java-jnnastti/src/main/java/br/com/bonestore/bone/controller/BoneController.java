package br.com.bonestore.bone.controller;

import br.com.bonestore.bone.model.Bone;
import br.com.bonestore.bone.repositorio.RepositorioBone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/bonestore/product")
public class BoneController {
    @Autowired
    private RepositorioBone repositorio;

    @GetMapping
    public ResponseEntity<List<Bone>> getBone()
    {
        //ResponseEntity é retorna um Codigo tipo 404 not found e uma entidade tipo um Bone
        List<Bone> bones = repositorio.findAll();
        if(bones.isEmpty()){
            //caso vazio retorna 204
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(bones);
    }

    @PostMapping
    public ResponseEntity<Bone> setBone(@RequestBody Bone bone)
    {
        if (bone == null){
            // Retorna erro 4xx
            return ResponseEntity.badRequest().build();
        }
        Bone boneSalvo = repositorio.save(bone);
        //retorna 2xx com o boné como ele foi salvo no banco, sem ser mais aquele void
        return ResponseEntity.accepted().body(boneSalvo);
    }
}
